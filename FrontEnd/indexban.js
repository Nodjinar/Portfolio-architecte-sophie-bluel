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


const res = await fetch("http://localhost:5678/api/works");
const works = await res.json();
console.log(works);

function genenerworks(works) {
    for (let i = 0; i < works.length; i++) {

        const figure = works[i];
        const noElement = document.createElement("h2");
        const divGalery = document.querySelector(".box1");
        const asidefigure = document.createElement('figure');

        noElement.innerText = figure.nom;
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        const nomElement = document.createElement("figcaption");
        nomElement.innerText = "éditer";
         const nElement = document.createElement("i");
         nElement.classList.add("fa-regular", "fa-trash-can");

        asidefigure.appendChild(nomElement);
        divGalery.appendChild(asidefigure);
        asidefigure.appendChild(imageElement);
        asidefigure.appendChild(nomElement);
        asidefigure.appendChild(nElement);

    }
}
     genenerworks(works);
     console.log("bonjour")

const btnModifier = document.querySelector(".btnmodal");
const modal1 = document.querySelector("#modal1");

btnModifier.addEventListener('click', function(){
    console.log("click reussi")
    modal1.style.display = "grid"
})

const btnCloseModal = document.querySelector('.close-modal');
btnCloseModal.addEventListener("click", function(){
    modal1.style.display = "none"
})



const btnModif = document.querySelector(".btnmodal");
const modal2 = document.querySelector(".modal2");
const premierModal = document.querySelector('#premiermodal')
const btnAjout = document.querySelector('#btnajout')

btnModifier.addEventListener('click', function(){
    console.log("click reussi")
    modal1.style.display = "grid"
})


btnAjout.addEventListener('click', function(){
    console.log("click reussi")
    premierModal.style.display = "none"
     modal2.style.display= "block"
})

const btnModi = document.querySelector("btnCloseModal1")
const closeModal1 = document.querySelector("#closeModal1")

btnModifier.addEventListener('click', function(){
    console.log("click reussi")
    modal1.style.display = "grid"
})

const btnCloseModal1 = document.querySelector('.close-modal1');
btnCloseModal.addEventListener("click", function(){
    modal1.style.display = "none"
})
// Ajout de la photo
const formEnvoi = document.querySelector('#formenvoi')
const imageChoisi = document.querySelector('#imagechoisi')
const inputFile = document.querySelector('#inputfile')
const categorie =document.querySelector('#categorie')
const titre = document.querySelector('.input1')

formEnvoi.addEventListener('submit', function(event){
    event.preventDefault();

    let formData = new FormData()

    formData.append('image', inputFile.files[0])
    formData.append('title', titre.value)
    formData.append('category', categorie.value)

    const monToken = window.localStorage.getItem('token')

    fetch("http://localhost:5678/api/works",{
        method: 'POST',
        headers: {'Authorization':`Bearer ${monToken}`},
        body: formData
    }).then((res)=>{
        if(res.ok){
            console.log("Requette reussie")
        }else{
            alert("Erreur de formulaire!!!")
        }
    })

})

inputFile.addEventListener('change', function(){
    imageChoisi.src = URL.createObjectURL(inputFile.files[0])
    imageChoisi.style.display = 'block'
})




 