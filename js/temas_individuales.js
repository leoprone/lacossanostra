/* ********** Menu ********** */

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
  
  
  


      //-------------TEMAS INDIVIDUALES--------------

const $plato=document.getElementsByClassName("plato")[0],

$discrotatetranslate=document.querySelector(".disc-rotate-translate"),
$agujerochico=document.getElementsByClassName("agujero-chico")[0],
$imgetiqueta=document.getElementsByClassName("img-etiqueta")[0],

$hoja1=document.querySelector(".hoja-1"),
$hoja2=document.querySelector(".hoja-2"),
$hoja3=document.querySelector(".hoja-3"),
$carrouselgrandechico=document.querySelector(".carrousel-grande-chico"),
$carrouselcontainergrandechico=document.querySelector(".carrousel-container-grande-chico"),
$pletra=document.querySelector(".p-letra"),
$pua=document.querySelector(".pua"),
$btnanimacion=document.querySelector(".btn-animacion"),
$iframe=document.querySelector(".fuente-audio iframe");

  /* 

function pausar(audio, boton) { 

    if(!audio.paused && !audio.ended){ 
        audio.pause(); 
        boton.value="start"; 
            
    }else{
            audio.play(); 
            boton.value="pause";
        } 

} 

  
   */
  
  
function movimientosTocadiscos(){
    $pua.classList.toggle("paused");
    $plato.classList.toggle("paused");
    $discrotatetranslate.classList.toggle("paused");
    $imgetiqueta.classList.toggle("paused");
    $agujerochico.classList.toggle("paused"); 
    }

   
/*   
$iframe.onmouseover=function(){
    movimientosTocadiscos();
}
 */

document.addEventListener("mouseover", (e)=>{
    if (e.target.matches(".fuente-audio iframe")) {
        movimientosTocadiscos();
    }
});


$iframe.addEventListener("touchstart", (e)=>{
    movimientosTocadiscos();
}, false);

////////////////////// MOVIMIENTO Y AUDIO TOCADISCOS ///////////////////////////

/* 
document.addEventListener("click", (e)=>{

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
 
               




        // ...........................  EVA  .......................


        const $audioeva=document.getElementById("audio-eva"),
        $botoneva=document.getElementById("boton-eva");

        
        if(e.target.matches(".boton-eva") && e.target.matches(".arranque-tema")){
                $botoneva.classList.toggle("red");
                setTimeout(pausar, 6000, $audioeva, $botoneva);
                $botoneva.classList.remove("arranque-tema");
                
            //vinculando audio y movimientos
                $pua.classList.toggle("paused");  
                movimientosTocadiscos();

                $botoneva.onclick=function(){
                    $botoneva.classList.toggle("red");
                    pausar($audioeva, $botoneva);

                //vinculando audio y movimientos
                    $pua.classList.toggle("paused");  
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


 */

//---------------------------------------------------------








document.getElementsByClassName("agrande")[0].addEventListener("click", (e)=>{
        
        //......... SWITCH  ver / cerrar libro grande ........................
        document.getElementsByClassName("agrande")[0].classList.toggle("switch");
        
        if (document.getElementsByClassName("agrande")[0].classList.contains("switch")) {
            document.getElementsByClassName("agrande")[0].innerHTML="X";
        } else {
            document.getElementsByClassName("agrande")[0].innerHTML="ver";
        }
        

                
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

            $carrouselcontainergrandechico.classList.toggle("carrousel-container-grande");
            $hoja1.classList.toggle("carrousel-slide-grande");

            $pletra.classList.toggle("p-letra-grande");

            $hoja2.classList.toggle("carrousel-slide-grande");

            $hoja3.classList.toggle("carrousel-slide-grande");

            $hoja1.classList.toggle("grande-1");
            $hoja2.classList.toggle("grande-2-3");
            $hoja3.classList.toggle("grande-2-3");
            $hoja3.classList.toggle("img-grande-2-3");
                
}, false);



