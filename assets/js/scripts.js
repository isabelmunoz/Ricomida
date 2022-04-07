$("#enviarCorreo").click(function() {
    alert( "El correo fue enviado correctamente... ");
});


$("u, u>p").on("dblclick",function(){
    $(this).css({
        "color": "red",
        });  
});

$( ".card-title" ).click(function() {
    $( ".card-text" ).toggle();
  });
