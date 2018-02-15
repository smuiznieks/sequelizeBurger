$(function() {

    $('#submitBurger').on('click', function(event) {
        event.preventDefault();
        console.log('click');
        $.ajax('/api/burgers', {
            type: 'POST',
            data: { burger_name: $('#newBurger').val().trim() }
        }).then(
            function() {
                console.log('Burger has been added to the menu.');
                location.reload();
            }
        );
    });
    $('.devourButton').on('click', function(event) {
        event.preventDefault();
        var id = $(this).data('id');
        console.log(id);
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: { devoured: true }
        }).then(
            function() {
                console.log('Burger has been devoured.');
                location.reload();
            }
        );    
    });
    $('#submitCustomer').on('click', function(event) {
        event.preventDefault();
        console.log($('#newCustomer').val().trim());
        $.ajax('/api/customers', {
            type: 'POST',
            data: { customer_name: $('#newCustomer').val().trim() }
        }).then(
            function() {
                console.log('Customer has been added to table.');
                location.reload();
            }
        );
    });
});

