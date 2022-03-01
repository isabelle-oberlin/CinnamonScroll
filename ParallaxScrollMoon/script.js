let cards_back = document.getElementById('cards_back');
let cards_front = document.getElementById('cards_front');
let smile = document.getElementById('catsmile');
let text = document.getElementById('text');
/* pour le header, ce n'est pas un get ID mais le querySelector */
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
/* j'appelle cursor le "niveau de scroll", combien l'user a scrollé verticalement*/
    let cursor= window.scrollY;

    /* valeur de scroll + px donne une vitesse, style.left la direction */
    cards_back.style.left = cursor * 0.25 + 'px';
    /*cards_front.style.top = cursor * 0 + 'px';*/
    smile.style.top = cursor + 'px';

    /* les boutons du header nous suivent un peu mais pas lgtemps */
    header.style.top = cursor * 0.85 + 'px';

    text.style.marginLeft = cursor * -0.65 + 'px';
    text.style.top = cursor * 0.25 + 'px';
})
