const slides = [   
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// PUCES

// Création d'une boucle FOR pour afficher le nombre de puces (4) en fonction du nombre de slides (4)
for (let i = 0; i < slides.length; i++) { 
	let dots = document.getElementById('dots'); 
	let dot = document.createElement("div"); 
	dot.className = "dot dot"+i; 
	if ( i === 0 ){dot.className = "dot " + "dot"+i + " dot_selected";} 
	dots.appendChild(dot);
}

// On sélectionne l'image et le texte du document via sa classe
let bannerImg = document.querySelector('.banner-img');
let bannerText = document.querySelector('.banner-text');

// On déclare une variable slideIndex égale à 0 pour stocker l'index de la première slide et ainsi permettre de savoir sur quelle slide on se trouve : 0 = slide1.jpg
let slideIndex = 0;

// On crée une fonction changeSlide pour mettre à jour l'image et le texte du slider au clic sur les flèches
function changeSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`;
	bannerText.innerHTML = slides[slideIndex].tagLine;
}
changeSlide();


// FLÈCHES

// ÉCOUTEUR D'ÉVÉNEMENT FLECHE DROITE > SLIDE SUIVANTE
let arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function() {
	slideIndex++;
	// DÉFILEMENT CONTINUE
	if (slideIndex>= slides.length) {
		slideIndex = 0;
	}

	// CHANGEMENT DE LA PUCE SÉLECTIONNÉE
	let dotSelected = document.querySelector('.dot_selected');
	dotSelected.className = "dot dot"+(slideIndex-1);
	// DÉFILEMENT CONTINUE
	if (slideIndex === 0) {dotSelected.className = "dot dot"+(slides.length-1);}
	dotSelected = document.querySelector('.dot'+slideIndex);
	dotSelected.className = "dot " + "dot"+ slideIndex + " dot_selected" ;
	changeSlide();
});

// ÉCOUTEUR D'ÉVÉNEMENT FLECHE GAUCHE > SLIDE PRÉCÉDENTE
let arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function() {
	slideIndex--;
	// DÉFILEMENT CONTINUE
	if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}

	// CHANGEMENT DE LA PUCE SÉLECTIONNÉE
	let dotSelected = document.querySelector('.dot_selected');
	dotSelected.className = "dot dot"+(slideIndex+1);
	// DÉFILEMENT CONTINUE
	if (slideIndex === (slides.length-1)) {dotSelected.className = "dot dot0";}
	dotSelected = document.querySelector('.dot'+slideIndex);
	dotSelected.className = "dot " + "dot"+ slideIndex + " dot_selected" ;
	changeSlide();
});
