// Création du tableau des slides contenant pour chaque slide un objet avec les propriétés "image" et "tagLine"
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
for (let i = 0; i < slides.length; i++) { // on itére dans le tableau des slides
	let dots = document.getElementById('dots'); // on va chercher l'id dots dans le HTML
	let dot = document.createElement("div"); // on génère une div pour chaque puce
	dot.className = "dot dot"+i; // on modifie la classe pour chaque puce : dot dot0, dot dot1...
	if ( i === 0 ){dot.className = "dot " + "dot"+i + " dot_selected";} // si la puce est la première elle est sélectionnée par défaut
	dots.appendChild(dot); // On ajoute la div à la fin du conteneur id="dots"
}

// On récupère dans le DOM les classes image et texte de la slide
let bannerImg = document.querySelector('.banner-img');
let bannerText = document.querySelector('.banner-text');

// on déclare une variable slideNumber égale à 0 pour stocker l'index de la première image et ainsi permettre de savoir sur quelle slide on se trouve : 0 = slide1.jpg
let slideNumber = 0;


// On crée une fonction changeSlide pour mettre à jour l'image et le texte du slider lorsqu'on clique sur les flèches
function changeSlide() {
	bannerImg.src = `./assets/images/slideshow/${slides[slideNumber].image}`; // On met à jour la valeur de l'attribut src de l'image avec l'image correspondant à l'index actuel de la slide
	bannerText.innerHTML = slides[slideNumber].tagLine;  // On met à jour la valeur du texte de la slide avec la tagline correspondant à l'index actuel de la slide
}
changeSlide();


// FLÈCHES

// ÉVÉNEMENT FLECHE DROITE > SLIDE SUIVANTE
let arrowRight = document.querySelector('.arrow_right'); // On récupère la flèche dans le DOM
arrowRight.addEventListener('click', function() { // On génère un événement au clic sur la flèche
	slideNumber++; // On incrémente la valeur de slideNumber pour passer à la slide suivante

	if (slideNumber >= slides.length) { // Si la slide est >= à la longueur du tableau "slides" on arrive à la fin du tableau
		slideNumber = 0; // On revient au début du tableau
	}

	// Changement de la puce sélectionnée
	let dotSelected = document.querySelector('.dot_selected'); // On récupère dans le DOM la div avec la class dot_selected
	dotSelected.className = "dot dot"+(slideNumber-1); // On ajoute à la class dot la valeur de la slide actuelle
	if (slideNumber === 0) {dotSelected.className = "dot dot"+(slides.length-1);} // Si slideNumber est égale à 0 (quand on revient au début du slider), on ajoute la class dot+Valeur de la dernière slide == pour faire un slider infini
	dotSelected = document.querySelector('.dot'+slideNumber); // Récupère dans le DOM la div avec la class dot+Valeur de la slideNumber
	dotSelected.className = "dot " + "dot"+ slideNumber + " dot_selected" ; // On lui ajouter la class dot_selected
	changeSlide(); // On appelle notre fonction pour mettre à jour le slider
});

// ÉVÉNEMENT FLECHE GAUCHE > SLIDE PRÉCÉDENTE
let arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function() {
	slideNumber--; // on décrémente la valeur de slideNumber pour passer à la slide précédente

	if (slideNumber < 0) { // Si la slide revient au début et est inférieure à 0 (le début du tableau)
		slideNumber = slides.length - 1; // On revient à la dernière slide du tableau 
	}

	// Changement de la puce sélectionnée
	let dotSelected = document.querySelector('.dot_selected');
	dotSelected.className = "dot dot"+(slideNumber+1);
	if (slideNumber === (slides.length-1)) {dotSelected.className = "dot dot0";}
	dotSelected = document.querySelector('.dot'+slideNumber);
	dotSelected.className = "dot " + "dot"+ slideNumber + " dot_selected" ;
	changeSlide(); // On appelle notre fonction pour mettre à jour le slider
});
