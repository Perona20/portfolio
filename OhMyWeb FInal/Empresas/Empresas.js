$(document).ready(function(){
//    listarServicios();
    listarBasico();
    listarPro();
    listarFull();
    listarPack();
    
    $(".divIconos").hide();
    $("#quintaSeccion").hide();
    $("#sextaSeccion").hide();
    $(".error").hide();
    $("#divBotonFinalizar").hide();
    $("#cancelar").hide();
    
     $("#botonPersonaliza").click(function(){
        $("#divBotonPersonaliza").hide();
         $("#quintaSeccion").show();
    });
    
    $("#btnTotal").click(function(){
        ultimoPaso();
    });
    
    $("#modificar").click(function(){
       modificar();
    });
    
    
     $("#benviar").click(function(){
        validarCampos();
    });
    
    
    $('#botonFinalizar').click(function(){
        location.reload();
    });
    
    
    $('#cancelar').click(function(){
        location.reload();
    });
    
    
    $('#btnCancelar').click(function(){
        location.reload();
    });
    
    
     $('#basico').click(function(){
        seleccionarBasico();
    });
    
    
    $('#pro').click(function(){
        seleccionarPro();
    });
    
    
     $('#full').click(function(){
        seleccionarFull();
    });
    
    
    $(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.50);
		
		$('#hero').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});

$("#primeraSeccion").mousemove(function(event){
    $(".divIconos").fadeIn(2500);
});    
    $("#cuartaSeccion").mousemove(function(event){
        $(".divIconos").fadeIn(500);
}); 
    
});

/*var servicios = new Array();

servicios = [[1,"analitica","Anallitica Web"],[2,"cobertura","Cobertura Legal"],[3,"gestordecontenidos","Gestores de Contenidos"],[4,"hostingydominios","Hosting & Dominios"],[5,"posicionamiento","Posicionamiento en Buscadores"],[6,"logotipos","Diseño de Logotipos"]];*/

var basico = new Array();
var pro = new Array();
var full = new Array();

basico = [[1,"Básico",699,"4 Apartados","Imagenes Profesionales","Redacción de contenidos","Blog","Estrategia SEO"]];
pro = [[1,"Profesional",1.299,"6 Apartados","Imagenes Profesionales","Redacción de Contenidos","Blog","Estrategia SEO"]];
full = [[1,"Full",2.399,"8 Apartados","Imagenes Profesionales","Redacción de contenidos","Blog","Estrategia SEO"]];

var pack = new Array();
var seleccionPack = new Array();
var seleccionPackPrecio = new Array();
var seleccionEliminado = new Array();
var carrito;

pack =[["4 Apartados",179.99],["6 Apartados",209.99],["8 Apartados",339.99],["Plantilla WordPress",269.99],["Pantilla BootStrap",309.99],["Creación página",509.99],["Busqueda de imagenes",190.00],["Imagenes Profesionales",280.00],["Edición de imagenes",359.99],["Creación de logotipo",149.98],["Redacción de contenidos",199.79],["Blog",279.89],["Posicionamiento SEO",379.99],["Hosting y dominios",549.98],["Mantenimiento (precio anual)",779.59],];

/*function listarServicios(){
    var htmlservicios ="";
     

    for (var i = 0; i < servicios.length; i++ )
    {
        
    
        htmlservicios += '<div class="divservicios" id="img'+servicios[i][1]+'"><img class="imgservicios" src="../Imagenes/Servicios/'+servicios[i][1]+'.png"<br><p>'+servicios[i][2]+'</p></div>';
        $("#iconos").html(htmlservicios);
        
    }
};*/
function listarBasico(){
    var htmlBasico ="";
    for (var i = 0; i < basico.length; i++ )
    {
        
    
        htmlBasico += '<p class="precio">'+basico[i][2]+'€</p><p class="pPaquete">'+basico[i][1]+'</p><p class="pPaquete" >'+basico[i][3]+'</p><p class="pPaquete" >'+basico[i][4]+'</p><p class="pPaquete" >'+basico[i][5]+'</p><p class="ptachado">'+full[i][6]+'</p><p class="ptachado" >'+full[i][7]+'</p>';
        $("#basico").html(htmlBasico);
        
    }
};


function seleccionarBasico(){
    var htmlSelectBasico = "";
    
    for (var i = 0; i < basico.length; i++ )
    {
     htmlSelectBasico += '<p>'+basico[i][3]+'</p><p>'+basico[i][4]+'</p><p>'+basico[i][5]+'</p>';
     carrito = basico[i][2];
    }
    
    $("#packSeleccionado").html("<h1>Pack Elegido</h1><div id='pPackElegido'><p>"+htmlSelectBasico+"</p></div>");
    $("#precioTotal").html("<h1>Precio Final</h1><h2>"+carrito+"€</h2>");
    $("#sextaSeccion").show();
    $("#personalizaTitulo").hide();
    $("#modificar").hide();
    $("#cancelar").show();
};



function listarPro(){
    var htmlPro ="";
    for (var i = 0; i < pro.length; i++ )
    {
        
    
        htmlPro += '<p class="precio">'+pro[i][2]+'€</p><p class="pPaquete" >'+pro[i][1]+'</p><p class="pPaquete" >'+pro[i][3]+'</p><p class="pPaquete" >'+pro[i][4]+'</p><p class="pPaquete" >'+pro[i][5]+'</p><p class="pPaquete" >'+pro[i][6]+'</p><p class="ptachado" >'+full[i][7]+'</p>';
        $("#pro").html(htmlPro);
        
    }
};


function seleccionarPro(){
    var htmlSelectPro = "";
    
    for (var i = 0; i < pro.length; i++ )
    {
     htmlSelectPro += '<p>'+pro[i][3]+'</p><p>'+pro[i][4]+'</p><p>'+pro[i][5]+'</p><p>'+pro[i][6]+'</p>';
     carrito = pro[i][2];
    }
    
    $("#packSeleccionado").html("<h1>Pack Elegido</h1><div id='pPackElegido'><p>"+htmlSelectPro+"</p></div>");
    $("#precioTotal").html("<h1>Precio Final</h1><h2>"+carrito+"€</h2>");
    $("#sextaSeccion").show();
    $("#personalizaTitulo").hide();
    $("#modificar").hide();
    $("#cancelar").show();
};



function listarFull(){
    var htmlFull ="";
    for (var i = 0; i < full.length; i++ )
    {
        
    
        htmlFull += '<p class="precio">'+full[i][2]+'€</p><p class="pPaquete" >'+full[i][1]+'</p><p class="pPaquete" >'+full[i][3]+'</p><p class="pPaquete" >'+full[i][4]+'</p><p class="pPaquete" >'+full[i][5]+'</p><p class="pPaquete" >'+full[i][6]+'</p><p class="pPaquete" >'+full[i][7]+'</p>';
        $("#full").html(htmlFull);
        
    }
};


function seleccionarFull(){
    var htmlSelectFull = "";
    
    for (var i = 0; i < full.length; i++ )
    {
     htmlSelectFull += '<p>'+full[i][3]+'</p><p>'+full[i][4]+'</p><p>'+full[i][5]+'</p><p>'+full[i][6]+'</p><p>'+full[i][7]+'</p>';
     carrito = full[i][2];
    }
    
    $("#packSeleccionado").html("<h1>Pack Elegido</h1><div id='pPackElegido'><p>"+htmlSelectFull+"</p></div>");
    $("#precioTotal").html("<h1>Precio Final</h1><h2>"+carrito+"€</h2>");
    $("#sextaSeccion").show();
    $("#personalizaTitulo").hide();
    $("#modificar").hide();
    $("#cancelar").show();
};


function listarPack(){
    var htmlPack ="";
     

    for (var i = 0; i < pack.length; i++ )
    {
        
    
        htmlPack += '<p id="listaPackNombre">.'+pack[i][0]+'-'+pack[i][1]+'€ <input type="button" class="botonAnadirPack" id="botonAnadir'+pack[i][0]+'" value="+" onclick="seleccionarPack('+i+')"></p>';
        $("#pack").html(htmlPack);
        
    }
};

function seleccionarPack(i){
    var encontrar = seleccionPack.indexOf(pack[i][0]);
    
        if (encontrar == -1)
            {
                seleccionPack.push(pack[i][0]);   
                seleccionPackPrecio.push(pack[i][1]);
                compraPack(); 
            }
        else
            {
                alert("El pack Seleccionado ya está en la cesta");
                return false;
            }
        
};

function compraPack(){
    var htmlcompraPack = "";
    var htmlCompraDescripcion = "";
    carrito = 0;
        
        for(var i=0;i<seleccionPack.length;i++)
         {
              
                    htmlcompraPack += "<div id='cestaPack'>"+seleccionPack[i]+"<br>"+seleccionPackPrecio[i]+"€<br><input type='button' value='Eliminar' onclick='quitarPack("+i+")' class='reset' id='reset"+seleccionPack[i]+"'></div>";
                    $("#cesta").html(htmlcompraPack);
                    carrito += seleccionPackPrecio[i];
                    htmlCompraDescripcion +="<p>"+seleccionPack[i]+"<p>";
            
             
             if (seleccionPack.length == 1)
                 {
                     $("#cesta").css("column-count", '1');
                 }
             else
                 {
                     $("#cesta").css("column-count", '2');
                 }
                 
         }
         
             carrito = parseFloat(carrito);
             carrito = carrito.toFixed(2);
             $("#cestaPrecio").html("<p><h3>TOTAL: "+carrito+"€</h3></p>");
             $("#packSeleccionado").html("<h1>Pack Elegido</h1><div id='pPackElegido'><p>"+htmlCompraDescripcion+"</p></div>");
             $("#precioTotal").html("<h1>Precio Final</h1><h2>"+carrito+"€</h2>")
};

function quitarPack(i){
    
    pack.push(seleccionEliminado[i]);         
    seleccionPack.splice(i,1);
    seleccionPackPrecio.splice(i,1);
    $("#cesta").html("");
    carrito = 0;
    $("#cestaPrecio").html("");
    compraPack();
         
       if (carrito == 0)
           {
               $("#cestaPrecio").html("<h3>No hay ningún Pack seleccionado </h3>");
           }
};



function ultimoPaso(){
    if ($("#cesta").html() == "")
        {
            alert("No tienes ningún pack seleccionado, debes elegir algún pack");
            $("#cesta").css("border",'4px solid #d9534f');
        }
    else
        {
            $("#cesta").css("border", '4px solid #dfe3ee');
            $("#personaliza").hide();
            $("#quintaSeccion").hide();
            $("#sextaSeccion").show(); 
            $("#contenedorFormulario").show();
        }
}

function validarCampos(){
    var empresa = $("#Empresa").val();
    var localidad = $("#Localidad").val();
    var contacto = $("#PersonaDeContacto").val();
    var email = $("#Email").val();
    var telefono = $("#Telefono").val();
    var dudas = $("#EnQue").val();
    var mostrar = "";
    var valido = true;
    
    if (empresa == "" || !empresa.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9 ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Empresa es incorrecto</p>"
            $("#Empresa").css("border", '4px solid #d9534f');
            $("#sextaSeccion").css("height", "1000px");
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
            valido;
           
        }
    if (localidad == "" || !localidad.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Localidad es incorrecto</p>"
            $("#Localidad").css("border", '4px solid #d9534f');
            $("#sextaSeccion").css("height", "1030px");
            $("#errorLocalidad").html(mostrar);
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
            valido ;
           
        }
    if (contacto == "" || !contacto.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ ]*$/) )
        {
            mostrar = "<p class='error'>EL campo Persona de Contacto es incorrecto</p>"
            $("#PersonaDeContacto").css("border", '4px solid #d9534f');
            $("#sextaSeccion").css("height", "1070px");
            $("#errorContacto").html(mostrar);
            $("#errorContacto").show();
            $(".error").css("color", '#d9534f');
            $(".error").css("font-size", '15px');
            valido = false;
        }
    else 
        {
            $("#PersonaDeContacto").css("border", '1px solid #8b9dc3');
            $("#errorContacto").html("");
            $("#errorContacto").hide();
            valido;
           
        }
    if (email == "" || !email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/))
        {
            mostrar = "<p class='error'>EL campo Email es incorrecto</p>"
            $("#Email").css("border", '4px solid #d9534f');
            $("#sextaSeccion").css("height", "1100px");
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
            $("#sextaSeccion").css("height", "1160px");
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
    if (!valido)
        {
            return false;
        }
    else
        {
            enviarFormulario();
        }

};

function modificar(){
        $("#sextaSeccion").hide();
        $("#quintaSeccion").show();
        $("#personaliza").show();
        $("#sextaSeccion").css("height", "950px");
        $(".error").html("");
        $(".error").hide();
        $(".input").css("border", '1px solid #8b9dc3');
        $(".input").val("");
};

function enviarFormulario(){
     var nombre = $("#PersonaDeContacto").val();
     var empresa = $("#Empresa").val();
     var email = $("#Email").val();
     var telefono =$("#Telefono").val();
     var htmlEnviarFormulario ="<div id='respuesta'><h1>Formulario enviado correctamente, el precio total del pack seleccionado será de <strong>"+carrito+"€ </strong></h1><p>Desde OhMyWeb queremos agradecerte la confianza depositada en nosotros, en breve recivirás un correo al email que nos has facilitado,<strong>"+email+"</strong>, con los detalles del pack que has elegido. En un periodo de dos días nos pondremos en contacto con usted,<strong>"+nombre+"</strong>, mediante el número de teléfono,<strong>"+telefono+"</strong>, facilitado anteriormente, para ultimar los detalles de la página web de su empresa,<strong>"+empresa+"</strong>.</p></div>";
     $("#formulario").hide();
     $("#descripcion").hide();
     $("#sextaSeccion").css("height", "auto");
     $("#contenedorFormulario").html(htmlEnviarFormulario); 
     $("#divBotonFinalizar").show();
};
