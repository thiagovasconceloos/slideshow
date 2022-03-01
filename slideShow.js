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

let items = document.querySelectorAll('.item');


const previuos = () => {

    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
    

}

const next = () => {
    
   const lastItem = items[items.length-1];

    containerItems.insertBefore(lastItem,items[0]);
    items = document.querySelectorAll('.item');
    

}


document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previuos);