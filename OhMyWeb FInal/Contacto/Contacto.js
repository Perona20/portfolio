$(document).ready(function(){

    $(".error").hide();
    $('#divFinalizar').hide();
    
    $("#benviar").click(function(){
        validarCampos();
    });
    
    $('#botonFinalizar').click(function(){
        location.reload();
    });

});
function validarCampos(){
    var nombre = $("#Nombre").val();
    var empresa = $("#Empresa").val();
    var localidad = $("#Localidad").val();
    var email = $("#Email").val();
    var telefono = $("#Telefono").val();
    var como = $("#Como").val();
    var dudas = $("#EnQue").val();
    var mostrar = "";
    var valido = true;
    
    if (nombre == "" || !nombre.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0 ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Nombre es incorrecto</p>"
            $("#Nombre").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1090px");
            $("#errorNombre").html(mostrar);
            $("#errorNombre").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido = false;
        }
    else 
        {
            $("#Nombre").css("border", '1px solid #8b9dc3');
            $("#errorNombre").html("");
            $("#errorNombre").hide();
            valido;
           
        }
    if (empresa == "" || !empresa.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Empresa es incorrecto</p>"
            $("#Empresa").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1120px");
            $("#errorEmpresa").html(mostrar);
            $("#errorEmpresa").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido = false;
        }
    else 
        {
            $("#Empresa").css("border", '1px solid #8b9dc3');
            $("#errorEmpresa").html("");
            $("#errorEmpresa").hide();
            valido ;
           
        }
    if (localidad == "" || !localidad.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Localidad es incorrecto</p>"
            $("#Localidad").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1160px");
            $("#Localidad").html(mostrar);
            $("#errorLocalidad").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido = false;
        }
    else 
        {
            $("#Localidad").css("border", '1px solid #8b9dc3');
            $("#errorLocalidad").html("");
            $("#errorLocalidad").hide();
            valido;
           
        }
    if (email == "" || !email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/))
        {
            mostrar = "<p class='error'>EL campo Email es incorrecto</p>"
            $("#Email").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1190px");
            $("#errorEmail").html(mostrar);
            $("#errorEmail").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido = false;
        }
    else 
        {
            $("#Email").css("border", '1px solid #8b9dc3');
            $("#errorEmail").html("");
            $("#errorEmail").hide();
            valido;
        
        }
    if (telefono == "" || !telefono.match(/^([0-9]{9})+$/))
        {
            mostrar = "<p class='error'>EL campo Telefono es incorrecto</p>"
            $("#Telefono").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1220px");
            $("#errorTelefono").html(mostrar);
            $("#errorTelefono").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido =false;
        }
    else 
        {
            $("#Telefono").css("border", '1px solid #8b9dc3');
            $("#errorTelefono").html("");
            $("#errorTelefono").hide();
            valido;
            
        }
     if ( !como.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Como nos has conocido es incorrecto</p>"
            $("#Como").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1250px");
            $("#errorComo").html(mostrar);
            $("#errorComo").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido =false;
        }
    else 
        {
            $("#Como").css("border", '1px solid #8b9dc3');
            $("#errorComo").html("");
            $("#errorComo").hide();
            valido;
            
        }
    if ( dudas == "" ||!dudas.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]*$/) )
        {
            mostrar = "<p class='error'>EL campo en que podemos ayudarte es incorrecto</p>"
            $("#EnQue").css("border", '4px solid #d9534f');
            $("#primeraSeccion").css("height", "1280px");
            $("#errorEnQue").html(mostrar);
            $("#errorEnQue").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido =false;
        }
    else 
        {
            $("#EnQue").css("border", '1px solid #8b9dc3');
            $("#errorEnQue").html("");
            $("#errorEnQue").hide();
            valido;
            
        }
    if (!valido)
        {
            return false;
        }
    else
        {
            enviarFormulario();
        }

};

function enviarFormulario(){
    var nombre = $("#Nombre").val();
    var empresa = $("#Empresa").val();
    var localidad = $("#Localidad").val();
    var email = $("#Email").val();
    var telefono = $("#Telefono").val();
    var como = $("#Como").val();
    var dudas = $("#EnQue").val();
     var htmlEnviarFormulario ="<div id='respuesta'><h1>Formulario enviado correctamente, Gracias por mostrar interes en nuestra empresa, <stron>"+nombre+"</strong>, desde OhMyWeb queremos ayudarte a hacer crecer tu empresa, <strong>"+empresa+"</strong>, nuestro equipo técnico está procesando su duda, <strong>"+dudas+"</strong>.En un periodo de dos días recibirás un correo al email facilitado, <strong>"+email+"</strong>, contestandote a la duda por la cual has rellenado el formulario.</p></div>";
     $("#formulario").hide();
     $("#contacto").hide();
     $("#primeraSeccion").css("height", "auto");
     $("#primeraSeccion").html(htmlEnviarFormulario); 
     $("#divFinalizar").show();
};