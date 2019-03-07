var empresas = new Array();
empresas = [[1,"companyname"],[2,"constructo"],[3,"kprichos"],[4,"logosea"],[5,"nosolologos"],[6,"redes2000"],[7,"properti"],[8,"darwoft"],[9,"isp"],[10,"spain"],[11,"style"],[12,"enusa"],[13,"aleph"],[14,"blue"],[15,"permuy"],[16,"turijobs"],[17,"todofoam"],[18,"fisiolife"],[19,"mundoludix"],[20,"springfield"],[21,"dircom"],[22,"logo"],[23,"preven"],[23,"green"],[24,"galindo"],[25,"emgrisa"],[26,"jazz"],[27,"ryzen"],[28,"encore"],[29,"cytognos"]];

function listarEmpresas(){
    var htmlempresas ="";
     

    for (var i = 0; i < empresas.length; i++ )
    {
        
    
        htmlempresas += '<img id="imgempresa" src="Imagenes/Empresas/'+empresas[i][1]+'.png"/>';
        $("#logemp").html(htmlempresas);
        
    }
};
$(document).ready(function(){
listarEmpresas();

    $("#iIconosProyectosUno").hide();
    $("#iIconosProyectosDos").hide();
    $("#iIconosProyectosTres").hide();
    $("#iIconosProyectosCuatro").hide();
    $("#iIconosProyectosCinco").hide();
    $("#iIconosProyectosSeis").hide();
    
    $(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.10);
		
		$('#contenedor').css({
			'background-position': '0 -' + posicion + 'px'
		});
 
	});
  
    $("#iconoProceso").mousemove(function(event){
//    $("#iIconosProyectos").fadeIn(3000);
    $("#iIconosProyectosUno").fadeIn(3000);
    $("#iIconosProyectosDos").fadeIn(3000);
    $("#iIconosProyectosTres").fadeIn(3000);
})
   
    $("#proyectos").mousemove(function(event){
//    $("#iIconosProyectos").fadeIn(3000);
    $("#iIconosProyectosCuatro").fadeIn(3000);
    $("#iIconosProyectosCinco").fadeIn(3000);
    $("#iIconosProyectosSeis").fadeIn(3000);
})
    
});
$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 2000);

                 return false;
             }
     }
});
});

