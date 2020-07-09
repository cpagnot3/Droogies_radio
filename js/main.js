// Récupération des blocs
var mainMenu = document.querySelector("#menu");
var burgerMenu = document.querySelector("#menu-burger");
var close = document.querySelector("#close");

/*===============================*/
/*=== Clic sur le menu burger ===*/
/*===============================*/
// Vérifie si l'événement touchstart existe et est le premier déclenché
var clickedEvent = "click"; // Au clic si "touchstart" n'est pas détecté
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
burgerMenu.addEventListener(clickedEvent, function(evt) {
		mainMenu.setAttribute("class", "slideRight");
}, false);

// Créé un "toggle class" en Javascrit natif (compatible partout)
close.addEventListener(clickedEvent, function(evt) {
		mainMenu.setAttribute("class", "slideLeft");
}, false);

$(document).ready(function() {
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
	$('#menu > ul > li > a').on('click', function(event) {
		$('#menu > ul > li > a').removeClass('active-menu')
		$(this).addClass('active-menu');
	});
});

