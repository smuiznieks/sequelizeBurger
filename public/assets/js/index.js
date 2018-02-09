$(function() {
    $('#submit').on('click', function(event) {
        event.preventDefault();
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
        var id = $(this).data('id');
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
});

