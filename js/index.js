/* ********** Menu ********** */

((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");


  $btnMenu.addEventListener('click', (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });



/*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
esconder el menu cuando ya se seleccionó una sección
 (por delegación de eventos, asignando el click a un
  elem. de nivel superior, en este caso, el document)*/ 

d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);





//BOTON ABRIR TAPAS DISCOS (index.html)


const $abririnsecta=document.getElementById("abrir-insecta"),
$btninsecta=document.getElementById("btn-insecta"),

$galeria=document.getElementById("galeria"),
$galery=document.getElementById("galery"),
$galery2=document.getElementById("galery2"),
$insectacontainertotal=document.getElementById("insecta-container-total"),
$discinsectacontainer=document.getElementById("disc-insecta-container"),

 

//$music=document.getElementById("music"),

$albumlacossanostra=document.getElementById("album-la-cossa-nostra"),

$mov=document.querySelector(".mov");



 // cuando carga la página
window.addEventListener('load', animacionAlbum, false); 


function animacionAlbum(){
 
  setTimeout(()=>{
       $mov.classList.add("movimiento-alternado");
  }, 12000); // el movimiento del album no empieza hasta que 
             //  termine la animación del fondo con balas
} 







document.addEventListener("click", (e)=>{


         //------INSECTA--------------
       if(e.target.matches(".btn-abrir-insecta")){
          $btninsecta.classList.remove("movimiento-alternado");
          $abririnsecta.classList.remove("movimiento-alternado");
          $abririnsecta.classList.add("abrir-tapa");
          $btninsecta.classList.add("abrir-tapa");
          $discinsectacontainer.classList.add("disc-animation");
          $insectacontainertotal.classList.add("visited-disc-2");
          $albumlacossanostra.classList.add("album-activado");   
        }

});










                 //------------GALERÍA-------------
/* 
      if(e.target.matches(".transp-foto")){
        $galery.classList.toggle("normal-galery");
       $galeria.classList.toggle("galeria-grande1");
        
      }

      if(e.target.matches(".transp2-foto")){
        $galery2.classList.toggle("normal-galery");
        $galeria.classList.toggle("galeria-grande2");
        
      }
      */










