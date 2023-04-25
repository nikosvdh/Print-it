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

// On récupère dans le DOM les classes image et texte de la slide
let bannerImg = document.querySelector('.banner-img');
let bannerText = document.querySelector('.banner-text');

// on déclare une variable slideNumber égale à 0 pour stocker l'index de la première image et ainsi permettre de savoir sur quelle slide on se trouve : 0 = slide1.jpg
let slideNumber = 0;


// On crée une fonction changeSlide pour mettre à jour l'image et le texte du slider lorsqu'on clique sur les flèches
function changeSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`;
	bannerText.innerHTML = slides[slideNumber].tagLine;
}
changeSlide();


// FLÈCHES

// ÉVÉNEMENT FLECHE DROITE > SLIDE SUIVANTE
let arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function() {
	slideNumber++;
	if (slideNumber >= slides.length) {
		slideNumber = 0;
	}

	// Changement de la puce sélectionnée
	let dotSelected = document.querySelector('.dot_selected');
	dotSelected.className = "dot dot"+(slideNumber-1);
	if (slideNumber === 0) {dotSelected.className = "dot dot"+(slides.length-1);}
	dotSelected = document.querySelector('.dot'+slideNumber);
	dotSelected.className = "dot " + "dot"+ slideNumber + " dot_selected" ;
	changeSlide();
});

// ÉVÉNEMENT FLECHE GAUCHE > SLIDE PRÉCÉDENTE
let arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function() {
	slideNumber--;
	if (slideNumber < 0) {
		slideNumber = slides.length - 1;
	}

	// Changement de la puce sélectionnée
	let dotSelected = document.querySelector('.dot_selected');
	dotSelected.className = "dot dot"+(slideNumber+1);
	if (slideNumber === (slides.length-1)) {dotSelected.className = "dot dot0";}
	dotSelected = document.querySelector('.dot'+slideNumber);
	dotSelected.className = "dot " + "dot"+ slideNumber + " dot_selected" ;
	changeSlide();
});
