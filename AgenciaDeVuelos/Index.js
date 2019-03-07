

$(document).ready(function(){
    $("#muestra").hide();
    $("#muestraTodo").hide();
    
    
    //cambiar imagen de fondo por una lista aleatoria.
$( function(){
    var arrImagenes = [ 'fondo1.jpg','fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg', 'fondo5.jpg', 'fondo6.jpg' ];
    var imagenActual = 'fondo1.jpg';
    var tiempo = 5000;
    var id_contenedor = '#primerContenedor'
    setInterval( function(){
        do{
            var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
        }
        while( randImage == imagenActual )
        imagenActual = randImage;
        cambiarImagenFondo(imagenActual, id_contenedor);
    }, tiempo)
})
 
function cambiarImagenFondo(nuevaImagen, contenedor){
    var contenedor = $('#primerContenedor' + contenedor);
    //cargar imagen primero
    var tempImagen = new Image();
    $(tempImagen).load( function(){
        contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
    });
    
    tempImagen.src = 'imagenes/' + nuevaImagen;
}
    



//Fin del Document.Ready      
});

 function volver(){
     location.reload();
};


// empieza script de JSON
var xmlhttp = new XMLHttpRequest();
var url = "InfoVuelos.txt";
var arrayVuelos;
var out = new Array();



xmlhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
 arrayVuelos = JSON.parse(this.responseText);
 mostrarArray(arrayVuelos);
 }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function mostrarArray(datos) {
   
 
    for( var i = 0; i < datos.length; i++) {
 
     out += [datos[i].origen+","+datos[i].destino+","+datos[i].fechaSalida+","+datos[i].fechaLlegada+","+datos[i].tipoDeVuelo+","+datos[i].precio]+";";
                
      
        
 }
   

    
};

//función mostrar vuelos según Origen/Destiono
function encontrarVuelo(){
    
    var vuelos = out.split(";");
    var entradaOrigen = $('select[id=ciudadOrigen]').val();
    var entradaDestino = $('select[id=ciudadDestino]').val();
    var resul="";
    for( var i = 0; i < vuelos.length; i++) {
        var disponible = vuelos[i].split(",");
        if (entradaOrigen == disponible[0] && entradaDestino == disponible[1])
            {
                var html ="";
              
                 html +="<div id='contenedorOferta'><div id='tituloOferta'><p>Ofertas de vuelos disponibles</p></div><div id='ofertas'><label>Origen: </label><p>"+disponible[0]+"</p><label>destino: </label><p>"+disponible[1]+"</p><label>Fecha de Salida :</label><p>"+disponible[2]+"</p><label>Fecha de llegada :</label><p>"+disponible[3]+"</p><label>Tipo de vuelo :</label><p>"+disponible[4]+"</p><label>Precio :</label><p>"+disponible[5]+"</p><div id='botonOferta'><input id='btn' type='button' onclick='volver()' value='Cerrar'/></div></div>"; 
                  resul += html;
                
                
            }
    };
        $("#muestra").html(resul);
        $("#muestra").show();

         if ($("#muestra").html() == "")
            {
                alert("No hay vuelos disponibles según su Origen/Destino deseado");
            
            }
};


//Función enserñar todos los vuelos disponbles
function ensenarTodo(){
    
    var vuelos = out.split(";");
    vuelos.pop();
    var resul="";
    for( var i = 0; i < vuelos.length; i++) {
        var disponible = vuelos[i].split(",");
        var html ="";
            html +="<div id='contenedorOfertaTodo'><div id='tituloOfertaTodo'><p>Ofertas de vuelos disponibles</p></div><div id='ofertasTodo'><p><label>Origen: </label>"+disponible[0]+"</p><p><label>destino: </label>"+disponible[1]+"</p><p><label>Fecha de Salida :</label>"+disponible[2]+"</p><p><label>Fecha de llegada :</label>"+disponible[3]+"</p><p><label>Tipo de vuelo :</label>"+disponible[4]+"</p><p><label>Precio :</label>"+disponible[5]+"</p><div id='botonOferta'><input id='btnTodo' type='button' onclick='' value='Seleccionar'/></div></div>"; 
            resul += html;
    }
    $("#muestraTodo").html(resul);
    $("#muestraTodo").show();
    if ($("#muestraTodo").html() == "")
        {
            alert("No hay vuelos disponibles");
            
        }
 };  


           
       
    
