// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();
console.log(travaux);


// Creation des balises
function genenertravaux (travaux){ 
for (let i = 0; i < travaux.length; i++) {
    const figure = travaux[i];
    const divGalery = document.querySelector(".gallery");
const sectionfigure = document.createElement('figure');

const imageElement = document.createElement("img");
imageElement.src = figure.imageUrl;
const nomElement = document.createElement("figcaption");
nomElement.innerText = figure.title;



divGalery.appendChild(sectionfigure);
sectionfigure.appendChild(imageElement);
sectionfigure.appendChild(nomElement);

}
}
genenertravaux(travaux);

