let cards_back = document.getElementById('cards_back');
let cards_front = document.getElementById('cards_front');
let cards2 = document.getElementById('cards2');
let cards22 = document.getElementById('cards22');
let cards3 = document.getElementById('cards3');
let cards4 = document.getElementById('cards4');
let smile = document.getElementById('catsmile');
let text = document.getElementById('text');
let madtext = document.getElementById('madtext');
/*appearing id like to change the opacigty but the get element does nt work?*/
let appearing = document.getElementById('appearing');
/* pour le header, ce n'est pas un get ID mais le querySelector */
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
/* j'appelle cursor le "niveau de scroll", combien l'user a scrollé verticalement*/


    let cursor= window.scrollY;

    appearing.style.left = cursor * -1 + 'px';
    /* valeur de scroll + px donne une vitesse, style.left la direction */
    cards_back.style.left = cursor * 0.25 + 'px';
    /*cards_front.style.left= cursor * -0.1 + 'px';*/
    cards2.style.left = cursor * 0.2 + 'px';
    cards22.style.left = cursor * -0.4 + 'px';
    cards3.style.left= cursor * 0.25 + 'px';
    
    cards4.style.left = cursor * -0.4 + 'px';
    smile.style.top = cursor + 'px';

    /* les boutons du header nous suivent un peu mais pas lgtemps 
    header.style.top = cursor * 0.85 + 'px';*/

    text.style.marginLeft = cursor * -0.65 + 'px';
    text.style.top = cursor * 0.25 + 'px';
    madtext.style.marginLeft = cursor * 0.45 + 'px';
    
})
