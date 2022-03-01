'use strict';



const images= [
// const images contem o endereço de cada imagem atraves do conceito "chave-valor", esta no formato json
      {'id' : ' 1', 'url' : './img/jujutsu.jpg'},
      {'id' : ' 2', 'url' : './img/kimetsu.jpg'},
      {'id' : ' 3', 'url' : './img/fairytail.jpg'},
      {'id' : ' 4', 'url' : './img/bleach.jpg'},
      {'id' : ' 5', 'url' : './img/onepiece.jpg'},
      {'id' : ' 6', 'url' : './img/naruto.jpg'},





]

// onde as imagens estão aparecendo.
const containerItems  = document.querySelector('#container-items');


const loadImages = (images,container) => {
  

    images.forEach(image => {
          
    container.innerHTML  += `
        <div class='item'>
        <img src='${image.url}'
        </div>



    
    `


    });




}



loadImages(images,containerItems);
