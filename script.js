function contact() {
  gsap.to(smile, { y: '580', opacity: 0.4 });
  gsap.to(sentence, { opacity: 1, y: '600', x: '200' });
  gsap.to(eyes2, { opacity: 0.4, y: '400', x: '110', scale: 0.7 });

}


//might have been more relevant in a Timeline, but still useful
let cards_back = document.getElementById('cards_back');
let cards_front = document.getElementById('cards_front');
let cards2 = document.getElementById('cards2');
let cards22 = document.getElementById('cards22');
let cards3 = document.getElementById('cards3');
let cards4 = document.getElementById('cards4');
let smile = document.getElementById('catsmile');
let eyes = document.getElementById('eyes');
let eyes2 = document.getElementById('eyes2');
let text = document.getElementById('text');
let madtext = document.getElementById('madtext');
let falltext = document.getElementById('falltext');
let downtext = document.getElementById('downtext');
let appearing = document.getElementById('appearing');
let rabbitpic = document.getElementById("picturerabbit");
let sentence = document.getElementById("sentence");

//for header or footer, not the id but a querySelector
let header = document.querySelector('header');
let footer = document.querySelector('footer');


//let suddenly = document.getElementById('suddenly')
let runningRabbit = document.getElementById('runningRabbit');

window.addEventListener('scroll', function () {

  //USING SCROLLTRIGGER
  //here cursor is an approximation of "vertical scroll level"
  let cursor = window.scrollY;

  //scroll + px value gives a speed, style.left a direction 
  //other than that it's iteration till it looks good
  runningRabbit.style.left = cursor * 0.3 + 'px';
  cards_back.style.left = cursor * 0.25 + 'px';
  cards2.style.left = cursor * 0.2 + 'px';
  cards22.style.left = cursor * -0.45 + 'px';
  cards3.style.left = cursor * 0.25 + 'px';
  cards4.style.left = cursor * -0.4 + 'px';


  //I want the eyes and smile to follow the user even when they scroll.
  //they might disappear/reappear by playing on opacity alone
  smile.style.top = cursor + 'px';
  eyes.style.top = cursor + 'px';


  //Scroll through a sentence or two too
  text.style.marginLeft = cursor * -0.45 + 'px';
  text.style.top = cursor * 0.25 + 'px';
  madtext.style.marginLeft = cursor * 0.3 + 'px';

  //Opposite direction a picture style rabbit to foreshadow Tenniel illustrations
  rabbitpic.style.left = cursor * -0.2 + 'px';


  //GSAP ANIMATIONS

  gsap.to(runningRabbit, {
    duration: 8,
    ease: "power1.in",
    //far to the right so it goes faster and doesn't get stuck on the side of the screen
    x: "1000px",
    repeat: -1,
    repeatDelay: 8,
  });

  gsap.to(appearing, { opacity: 1, duration: 8, repeat: -1, repeatDelay: 1 });

  gsap.fromTo(dipping, { x: 90, y: -35 }, { x: 90, y: 50 })

  gsap.fromTo(falling, { height: 180, ease: Linear.easeNone, duration: 1, yoyo: false }, { height: 0, duration: 4 });

  gsap.to(eyes, {
    autoAlpha: 0,
    scrollTrigger: {
      trigger: cards22,
      start: 'bottom top+=2',
      scrub: true,
    }
  });
});