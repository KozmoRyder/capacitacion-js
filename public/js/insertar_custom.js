$('#boton_enviar').on('click', function () {
    
    $.ajax({
        url: '/recibirDatos',
        method: 'POST',
        data: {
            id: $('#idInput').val(),
            nombre: $('#nombreInput').val(),
            apellido: $('#apellidoInput').val()
        },
        success: function (data) {
            alert('Datos enviados');
        }
    });
});