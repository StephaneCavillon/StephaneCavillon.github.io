// scroll doux et decalage ne pas avoir le titre sous la navbar
var navbartop = document.querySelector('.navbar');
console.log(navbartop.clientHeight);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // problème avec le scroll to, ça marchait avec scrollintoview mais pasde décalage sous la barre de menu, 
        // je pense que c'est un problème de selecteur
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // top: (this.offsetTop - navbartop.clientHeight),
            // left: 0,
            behavior: 'smooth',
        });
    });
});


// collapse du menu mobile lorsque l'on clique sur les liens
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault;

        document.querySelector('#navbarmobile').classList.remove( 'show');
    })
})