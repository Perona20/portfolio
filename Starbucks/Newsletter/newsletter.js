$(document).ready(function(){
    $("#errorEmail").hide(); 
    
    $(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.90);
		
		$('section').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
    
    
    
    
    $("#forM").validate({
        rules:{
            nombre: {required: true,maxlength:15},
            primerApellido: {required: true,maxlength:20},
            segundoApellido: {required: false,maxlength:20},
            email: {required: true, emailValido: true},
            recibir: {required: false},
            declaro: {required: true}
        },
        messages:{
            nombre:{
                required:"Campo obligatorio, introduce un nombre",
                maxlength: "Sol puedes poner 15 carácteres cómo máximo"
            },
            primerApellido:{
                required:"Campo obligatorio, introduce tu primer apellido",
                maxlength: "Sol puedes poner 20 carácteres cómo máximo"
            },
            segundoApellido:{
                maxlength: "Sol puedes poner 20 carácteres cómo máximo"
            },
            email:{
                required:"Campo obligatorio, introduce un email",
                emailValido:"Formato de email no válido, introduce formato válido"
            },
            declaro:{
                required:"El campo declaro es obligatorio"
            }
            },
        
        
       
        
        
        
        submitHandler: function(form) {

            pasarParametros();
            form.submit();
            
           
        },
              
        
    });
    
    $.validator.addMethod("emailValido", emailValido, "Formato de email no válido, introduce formato válido");
            
            function emailValido(value, element, param) {
                    return value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/);
              }
    
    
    
 }); 



    
    




function pasarParametros(){
    
    var nombre = $("#inputNombre").val();
    var primerApellido = $("#primerApellido").val();
    var segundoApellido = $("#segundoApellido").val();
    var email = $("#email").val();
    
    var url = "newsletterfinalizado.html";
    url += "?Formulario=Completado="+nombre+"="+primerApellido+"="+segundoApellido+"="+email;
    $("#forM").attr("action", url) 

};