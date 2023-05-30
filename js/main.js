'use strict';

//variables
let shareButton=document.querySelector('.share-button');
let hiddenShareBox=document.querySelector('.share-box');

//show hidden box, change button color
shareButton.addEventListener('click',()=>{
	hiddenShareBox.classList.toggle('hide-share-box');
	shareButton.classList.toggle('click-color');
});