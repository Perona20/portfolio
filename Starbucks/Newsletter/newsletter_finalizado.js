$(document).ready(function(){    
$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.90);
		
		$('section').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
    
    var urlActual = location.href;
    var parametros = urlActual.split("?");
    parametros.shift();
        
    parametros.splice(1,parametros.length);
    for ( var i = 0; i < parametros.length; i ++)
        {
            var parametro = parametros[i].split("=");
            var html ="";
            alert(parametro[0]+" "+parametro[1]);
            html += "<div id='contenedor'><p id='infoForm'>Gracias por completar el formulario "+parametro[2]+" "+parametro[3]+". En breve recibiras un correo electrónico al email facilitado, "+parametro[5]+" ,donde podrás finalizar la inscripción a nuestra newslleter.</p></div><br/><div id='contenedorEnlace' ><a id='volver' href='../Index.html'>Volver a la página inicial</a></div>";
            $("section").html(html);
        }
    
    
    
    
    
});


