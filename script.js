const timeline = gsap.timeline({ defaults: { duration: 1 } });

//gsap.to(".logo", { duration: 4, rotation: 360 });
timeline
    .to(".AliceThoughts", {duration : 2, x : 100})
    .fromTo("rabbit", {opacity: 100}, {x:150, y:100});
    //jsp pas pk j'ai réussi à le faire passer derrière le texte (z-order)
    //MAIS PAS à l'animer, doit y avoir un pb avec ma timeline le deuxième tween 
    //ne marche pas, que ce soit pour opacité ou mvt
    //ou alors j'ai pas choisi la bonne classe
    
    //.to(".rabbit", {opacity: 100})
    //.to(".img", {opacity: 100})
   // .fromTo(".rabbit",  {opacity: }, {opacity: 100, duration : 10});
   

    