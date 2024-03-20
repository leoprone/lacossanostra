




/* ********** Menu ********** */

/*función anónima autoejecutable*/



((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");


  $btnMenu.addEventListener('click', (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });
/*esconder el menu cuando ya se seleccionó una sección
 (por delegación de eventos, asignando el click a un
  elem. de nivel superior, en este caso, el document)*/ 
d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;/*no pasa nada ahí*/

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);


//BOTON ABRIR TAPAS DISCOS (index.html)


const $abrirgrtapa=document.getElementById("abrir-gr-tapa"),
$abririnsecta=document.getElementById("abrir-insecta"),
$abririnfinito1=document.getElementById("abrir-infinito1"),
$abrir3=document.getElementById("abrir-3"),
$abrirdiaslime=document.getElementById("abrir-dias-lime"),
$btninsecta=document.getElementById("btn-insecta"),
$btntachfelino=document.getElementById("btn-tach-felino"),
$btndiaslime=document.getElementById("btn-dias-lime"),
$discdiaslimecontainer=document.getElementById("disc-dias-lime-container"),
$disctachfelino=document.getElementById("disc-tach-felino"),
$discinsecta=document.getElementById("disc-insecta"),
$galeria=document.getElementById("galeria"),
$galery=document.getElementById("galery"),
$galery2=document.getElementById("galery2"),
$insectacontainertotal=document.getElementById("insecta-container-total"),
$discinsectacontainer=document.getElementById("disc-insecta-container"),
$diaslimecontainertotal=document.getElementById("dias-lime-container-total"),
$rotateinsecta=document.getElementById("rotate-insecta"),
$insectah3=document.getElementById("insecta-h3"),
$disctachfelinocontainer=document.getElementById("disc-tach-felino-container"),
$tachfelinocontainertotal=document.getElementById("tach-felino-container-total"),
$rotatetachfelino=document.getElementById("rotate-tach-felino"),
$rotatediaslime=document.getElementById("rotate-dias-lime"),
$puainsecta=document.getElementById("pua-insecta"),
$puatachfelino=document.getElementById("pua-tach-felino"),
$puadiaslime=document.getElementById("pua-dias-lime"),
$abrirtachfelino=document.getElementById("abrir-tach-felino"),
$carrouselgrandechico=document.getElementById("carrousel-grande-chico"),
$carrouselcontainergrandechico=document.getElementById("carrousel-container-grande-chico"),
$pletra=document.getElementById("p-letra"),
$hoja1=document.getElementById("hoja-1"),
$hoja2=document.getElementById("hoja-2"),
$hoja3=document.getElementById("hoja-3"),
//$music=document.getElementById("music"),
//$tocadiscos=document.getElementById("tocadiscos"),
$tituloinsecta=document.getElementById("titulo-insecta"),
$titulotachfelino=document.getElementById("titulo-tach-felino"),
$titulodiaslime=document.getElementById("titulo-dias-lime"),
$albumlacossanostra=document.getElementById("album-la-cossa-nostra"),

$albumindividualtachfelino=document.getElementById("album-individual-tach-felino"),
$albumindividualdiaslime=document.getElementById("album-individual-dias-lime"),
$discography=document.getElementById("discography"),
$tapadiscolcn=document.getElementById("tapa-disco-lcn"),
$agujerochico=document.getElementsByClassName("agujero-chico")[0],
$pua=document.querySelector(".pua"),

$puaeva=document.getElementById("pua-eva"),
$plato=document.getElementsByClassName("plato")[0],
$imgetiqueta=document.getElementsByClassName("img-etiqueta")[0],
$calcadocontainer=document.getElementById("calcado-container"),


$puasoloporconocer=document.getElementById("pua-solo-por-conocer"),
$platosoloporconocer=document.getElementById("plato-solo-por-conocer");





//vinculando animation con audio
/* 



  function presionar() { 
    setTimeout(function(){
      audio.play(); 
     },
      3000); 
    
    
    
             
     
     }  */

    

  /* function detener(){
      $botonvoyafrecuentarte.addEventListener('click', pausar($audiovoyafrecuentarte, $botonvoyafrecuentarte), false);
  
    } */

  
     function pausar(audio, boton) { 

     

      if(!audio.paused && !audio.ended){ 
          audio.pause(); 
         boton.value="start"; 
       
        
      
      }else{
           audio.play(); 
           boton.value="pause";
       } 
      
   } 
  

   function movimientosTocadiscos(){
    $plato.classList.toggle("paused");
    $discinsecta.classList.toggle("paused"); 
    $imgetiqueta.classList.toggle("paused");
  
    $agujerochico.classList.toggle("paused"); 
   }
  
   /* window.addEventListener('load', presionar, false);  
    
   window.addEventListener('load', detener, false); 
  */
   

document.addEventListener("click", (e)=>{

/*
       if(e.target.matches(".btn-abrir-gr")){
       $abrirgrtapa.classList.toggle("running");
       
         }
*/
/* if(e.target.matches(".calcado")){
$calcadocontainer.classList.toggle("calcado-activado");
} */




         //------INSECTA--------------
       if(e.target.matches(".btn-abrir-insecta")){

       // $tituloinsecta.classList.add("visibility-hidden");
       // $titulotachfelino.classList.remove("visibility-hidden");
        
       // $tocadiscos.classList.add("tocadiscos-activo");
        //$music.classList.add("music-activo");
        $btninsecta.classList.remove("movimiento-alternado");
          $abririnsecta.classList.remove("movimiento-alternado");
        $abririnsecta.classList.add("abrir-tapa");
        $btninsecta.classList.add("abrir-tapa");
       
        $discinsectacontainer.classList.add("disc-animation");
        //$insectacontainertotal.classList.add("z-index-20");
         
         $insectacontainertotal.classList.add("visited-disc-2");
         $albumlacossanostra.classList.add("album-activado");   
        // $rotateinsecta.classList.add("rotatex-50");
         
        //$puainsecta.classList.add("pua-animation");
        
        }

    //-----------TACH FELINO---------------

      if(e.target.matches(".btn-abrir-tach-felino")){



       // $insectacontainertotal.classList.add("disco-devuelto");

       //$discinsectacontainer.classList.remove("disc-animation");
       //$insectacontainertotal.classList.remove("visited-disc");
       //$insectacontainertotal.classList.add("visited-disc-2");
      
     
       // $btninsecta.classList.add("cerrar-tapa");
       // $abririnsecta.classList.add("cerrar-tapa");

        //$insectacontainertotal.classList.add("disco-devuelto");
       // $btninsecta.classList.remove("cerrar-tapa");
        //$abririnsecta.classList.remove("cerrar-tapa");
       

       // $titulotachfelino.classList.add("visibility-hidden");
        //$titulodiaslime.classList.remove("visibility-hidden");


        $abrirtachfelino.classList.toggle("running");
        $btntachfelino.classList.toggle("running");

       // $tachfelinocontainertotal.classList.add("z-index-22");
       // $disctachfelinocontainer.classList.add("z-index-32");
        $disctachfelinocontainer.classList.add("disc-animation");

        $tachfelinocontainertotal.classList.add("visited-disc-2");
        $albumindividualtachfelino.classList.add("album-activado");
      // $galeria.classList.add("margin-top");
       
        
      //  $rotatetachfelino.classList.add("rotatex-50");
       // $puatachfelino.classList.add("pua-animation");
       
    
     
      }

      //-------------DÍAS LIME----------------

      if(e.target.matches(".btn-abrir-dias-lime")){
        $abrirdiaslime.classList.toggle("running");
        $btndiaslime.classList.toggle("running");
        $discdiaslimecontainer.classList.add("disc-animation");

        
        $diaslimecontainertotal.classList.add("visited-disc-2");
       $albumindividualdiaslime.classList.add("dias-lime-activado");
        //$discography.classList.add("discography-grande");
        //$rotatediaslime.classList.add("rotatex-50");
        //$puadiaslime.classList.add("pua-animation");
      
        
      }

                 //------------GALERÍA-------------

      if(e.target.matches(".transp-foto")){
        $galery.classList.toggle("normal-galery");
       $galeria.classList.toggle("galeria-grande1");
        
      }

      if(e.target.matches(".transp2-foto")){
        $galery2.classList.toggle("normal-galery");
        $galeria.classList.toggle("galeria-grande2");
        
      }
     

      //-------------TEMAS INDIVIDUALES--------------








      if(e.target.matches(".agrandar")){
  
            $hoja1.classList.toggle("chico-1");
       $hoja2.classList.toggle("chico-2-3");
        $hoja3.classList.toggle("chico-2-3");

        $hoja1.classList.toggle("carrousel-slide-chico");
    
        
       
        $hoja2.classList.toggle("carrousel-slide-chico");
        
      
        $hoja3.classList.toggle("carrousel-slide-chico");
        $hoja1.classList.toggle("animation-hoja1"); 
        
        $hoja3.classList.toggle("animation-hoja3");

        $carrouselcontainergrandechico.classList.toggle("carrousel-container-cd-chico");
        $carrouselgrandechico.classList.toggle("carrousel-cd-chico");

/* 
        $carrouselcontainergrandechico.classList.add("carrousel-grande"); */
        $carrouselcontainergrandechico.classList.toggle("carrousel-container-grande");
        $hoja1.classList.toggle("carrousel-slide-grande");
      
        $pletra.classList.toggle("p-letra-grande");

        $hoja2.classList.toggle("carrousel-slide-grande");
         
        $hoja3.classList.toggle("carrousel-slide-grande");
     
        $hoja1.classList.toggle("grande-1");
        $hoja2.classList.toggle("grande-2-3");
        $hoja3.classList.toggle("grande-2-3");
        $hoja3.classList.toggle("img-grande-2-3");
            
       
      
        
      }
     




////////////////////// MOVIMIENTO Y AUDIO TOCADISCOS ///////////////////////////


// ...........................VOY A FRECUENTARTE.......................

const $audiovoyafrecuentarte=document.getElementById("audio-voy-a-frecuentarte"),
$botonvoyafrecuentarte=document.getElementById("boton-voy-a-frecuentarte");

 
if(e.target.matches(".boton-voy-a-frecuentarte") && e.target.matches(".arranque-tema")){
        $botonvoyafrecuentarte.classList.toggle("red");
        setTimeout(pausar, 6000, $audiovoyafrecuentarte, $botonvoyafrecuentarte);
        $botonvoyafrecuentarte.classList.remove("arranque-tema");
          
      //vinculando audio y movimientos
        $pua.classList.toggle("paused");  
        movimientosTocadiscos();

        $botonvoyafrecuentarte.onclick=function(){
              $botonvoyafrecuentarte.classList.toggle("red");
              pausar($audiovoyafrecuentarte, $botonvoyafrecuentarte);

            //vinculando audio y movimientos
              $pua.classList.toggle("paused");  
              movimientosTocadiscos();
          }
            
  }
/* 
   
if(e.target.matches(".boton-voy-a-frecuentarte")){
  $botonvoyafrecuentarte.classList.toggle("red");
 
  
  
  pausar($audiovoyafrecuentarte, $botonvoyafrecuentarte);
   


    
//vinculando audio y movimientos
  $pua.classList.toggle("paused");  
  movimientosTocadiscos();

    
       
  } */
  
 
 


 /* 

if(e.target.matches(".boton-voy-a-frecuentarte") && e.target.matches(".arranque-tema")){
  

pausar($audiovoyafrecuentarte, $botonvoyafrecuentarte);
  
 

  
//vinculando audio y movimientos
  $pua.classList.toggle("paused");  
  movimientosTocadiscos();
 
  

}

 */







// ...........................  EVA  .......................


const $audioeva=document.getElementById("audio-eva"),
$botoneva=document.getElementById("boton-eva");

 
if(e.target.matches(".boton-eva") && e.target.matches(".arranque-tema")){
        $botoneva.classList.toggle("red");
        setTimeout(pausar, 6000, $audioeva, $botoneva);
        $botoneva.classList.remove("arranque-tema");
          
      //vinculando audio y movimientos
        $puaeva.classList.toggle("paused");  
        movimientosTocadiscos();

        $botoneva.onclick=function(){
            $botoneva.classList.toggle("red");
            pausar($audioeva, $botoneva);

          //vinculando audio y movimientos
            $puaeva.classList.toggle("paused");  
            movimientosTocadiscos();
          }
            
  }




// ...........................SOLO POR CONOCER   .......................

const $audiosoloporconocer=document.getElementById("audio-solo-por-conocer"),
$botonsoloporconocer=document.getElementById("boton-solo-por-conocer");

 
if(e.target.matches(".boton-solo-por-conocer") && e.target.matches(".arranque-tema")){
        $botonsoloporconocer.classList.toggle("red");
        setTimeout(pausar, 6000, $audiosoloporconocer, $botonsoloporconocer);
        $botonsoloporconocer.classList.remove("arranque-tema");
          
      //vinculando audio y movimientos
        $pua.classList.toggle("paused");  
        movimientosTocadiscos();

        $botonsoloporconocer.onclick=function(){
              $botonsoloporconocer.classList.toggle("red");
              pausar($audiosoloporconocer, $botonsoloporconocer);

            //vinculando audio y movimientos
              $pua.classList.toggle("paused");  
              movimientosTocadiscos();
          }
            
  }



// ...........................SOLO POR CONOCER   .......................

const $audiodecime=document.getElementById("audio-decime"),
$botondecime=document.getElementById("boton-decime");

 
if(e.target.matches(".boton-decime") && e.target.matches(".arranque-tema")){
        $botondecime.classList.toggle("red");
        setTimeout(pausar, 6000, $audiodecime, $botondecime);
        $botondecime.classList.remove("arranque-tema");
          
      //vinculando audio y movimientos
        $pua.classList.toggle("paused");  
        movimientosTocadiscos();

        $botondecime.onclick=function(){
              $botondecime.classList.toggle("red");
              pausar($audiodecime, $botondecime);

            //vinculando audio y movimientos
              $pua.classList.toggle("paused");  
              movimientosTocadiscos();
          }
            
  }


  
// ........................... ASÍ NOMÁS  .......................

const $audioasinomas=document.getElementById("audio-asi-nomas"),
$botonasinomas=document.getElementById("boton-asi-nomas");

 
if(e.target.matches(".boton-asi-nomas") && e.target.matches(".arranque-tema")){
        $botonasinomas.classList.toggle("red");
        setTimeout(pausar, 6000, $audioasinomas, $botonasinomas);
        $botonasinomas.classList.remove("arranque-tema");
          
      //vinculando audio y movimientos
        $pua.classList.toggle("paused");  
        movimientosTocadiscos();

        $botonasinomas.onclick=function(){
              $botonasinomas.classList.toggle("red");
              pausar($audioasinomas, $botonasinomas);

            //vinculando audio y movimientos
              $pua.classList.toggle("paused");  
              movimientosTocadiscos();
          }
            
  }

});




//---------------------------------------------------------









