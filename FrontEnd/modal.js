const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();
console.log(travaux);

function genenertravaux (travaux){ 
   for (let i = 0; i < travaux.length; i++) {

    const figure = travaux[i];
    const noElement = document.createElement("h2");
    const divGalery = document.querySelector(".photo");
const asidefigure = document.createElement('figure');

noElement.innerText = figure.nom;
const imageElement = document.createElement("img");
imageElement.src = figure.imageUrl;
const nomElement = document.createElement("figcaption");
nomElement.innerText = figure.title;


asidefigure.appendChild(nomElement);
divGalery.appendChild(asidefigure);
asidefigure.appendChild(imageElement);
asidefigure.appendChild(nomElement);
 
   }
     }
     genenertravaux(travaux);
    
      


