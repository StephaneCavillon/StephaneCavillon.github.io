var navbartop = document.querySelector('.navbar');
var navbarbrand = document.querySelector('.navbar-brand');
var header = document.querySelector('#header');
var navbar_a = document.querySelectorAll('a[href^="#"]');
var aboutsection = document.querySelector('#about');

// scroll doux et decalage ne pas avoir le titre sous la navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
//************************************************************** */

// collapse du menu mobile lorsque l'on clique sur les liens
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault;

        document.querySelector('#navbarmobile').classList.remove( 'show');
    })
})
//*************************************************************** */

// apparition de la navbar lorsque l'accueil passe
var headerBottomPosition = header.offsetTop + header.offsetHeight;

// matchMedia = media query pour JS permet de tester une expression et de retourner true ou false avec matches
if(window.matchMedia("(min-width: 992px)").matches){
    //remove style="display: none;" sur le brand pour qu'il soit visible lors du slide de la navbar
    window.addEventListener('DOMContentLoaded', function (){
        navbarbrand.removeAttribute('style','display: none');
    });

//utilisation de jquery pour descendre la navbar
    $(window).on("scroll",function(){
        if(scrollY > headerBottomPosition){
            $(".navbar").slideDown(200);
            // $(".navbar-brand").slideDown(100);
        }else{
            $(".navbar").slideUp(200);
            // $(".navbar-brand").slideUp(100);
        }
    })
}else{
// remove display=none pour afficher les 3 barres de collapse
    window.addEventListener('DOMContentLoaded', function (){
        navbartop.removeAttribute('style','display: none');
    });


    $(".navbar-toggler").on("click", function(){
        if(scrollY > headerBottomPosition){
        }else{
            $(".navbar-brand").fadeToggle(100);
        }
    })

   
    $(window).on("scroll",function(){
// utilisation de Jquery pour cacher le navbar-brand
        if(scrollY > headerBottomPosition){
            console.log('scrollY :' + scrollY);

            $(".navbar-brand").fadeIn(200);
        }else{
            console.log('scrollY avant :' + scrollY)
            $(".navbar-brand").fadeOut(100);
            // $(".navbar-toggler").on("click", function(){
            //     $(".navbar-brand").fadeToggle(100);
            // })
    
        }
    })
}
//************************************************************* */

// changement de la classe active lors du défilement
//pour la section about
window.addEventListener('scroll', function (){
    if(scrollY > (aboutsection.offsetTop + (window.innerHeight /3))){
        console.log('affichage menu')
    
        //d'abord on supprime la classe active sur tous
        navbar_a.forEach(anchor => {
            anchor.classList.remove('active');
        })

        // on met ensuite la classe active sur l'element about

    }
});


