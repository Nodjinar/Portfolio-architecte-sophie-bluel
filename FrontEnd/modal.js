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
    
      
     const modale = document.querySelector('#btn-1');
     boutonModale.addEventListener('click',function(){
         const modal =travaux.filter(function(modale){
             return tous.categoryId===1;
         });
         console.log(modal);
         document.querySelector('.photo').innerHTML="";
         genenertravaux(modal);
     });
     
     
