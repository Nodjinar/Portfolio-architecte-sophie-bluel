// let modal = null

// const openModal= function(e) { 
//    e.preventDefault ()
//    const target = document.querySelector(e.target.getAttribute("href"))
//    target.style.display = null
//    target.removeAttribute('aria-hidden')
//    target.setAttribute ('aria-modal', 'true')
//    modal = target
//    modal.addEventListener("click" , closeModal)
//    modal.querySelector("js-modal-close").addEventListener("click", closeModal)
//    modal.querySelector(".js-modal-close").addEventListener("click", stopPropagation)
// }
// const btn1 = document.querySelectorAll('.js-modal-close').forEach(button => {
//     button.addEventListener('click', openModal)
// });

// const closeModal= function(e) { 
//     if (modal === null) return
//     e.preventDefault ()
//     const target = document.querySelector("#modal1")
//     target.style.display = 'none'
//     target.setAttribute('aria-hidden', "true")
//     target.removeAttribute ('aria-modal')
//  }
//  const btnClose = document.querySelector('.js-modal-close')
//  btnClose.addEventListener('click', closeModal)

//  const windowClose = document.querySelector('#modal1')
//  windowClose.addEventListener('click', closeModal)

// const stopPro = document.querySelector('.modal-wrapper')
// stopPro.addEventListener('click', (e)=>{
//     e.stopPropagation()
// })

// window.addEventListener('keydown', function(e){ 
//     if (e.key === "Escape" || e.key === "Esc"){
//         closeModal(e)
//     }
// } )


const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();
console.log(travaux);

function genenertravaux(travaux) {
    for (let i = 0; i < travaux.length; i++) {

        const figure = travaux[i];
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
     genenertravaux(travaux);
    
      
    
     
     
