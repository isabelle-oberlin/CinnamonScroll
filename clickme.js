
gsap.registerPlugin(ScrollTrigger);
window.addEventListener('load', function () {

    let cursor = window.scrollY;
    let turned = document.getElementById('turned');

    //TRIGGERED PARTS
    gsap.to(".aliceAppears", {
        scale: 0.5, ease: "linear", opacity: 0.5,
        scrollTrigger: {
            trigger: ".aliceAppears",

            start: "top 20%", //when top of picture passes 20% viewport height
            end: "+=1000", //after you've scrolled that much  
            scrub: true, //to link the animation with your scroll
            toggleActions: "restart complete reverse reset", //options: play, pause, resume, reset, restart, complete, reverse,none
            pin: true,
            //markers:true
        }
    })

    gsap.fromTo(".aliceGrows", { scale: 1, x: '900', y: '-700', },
        {
            scale: 4,
            opacity: 0.4,
            ease: "linear",
            scrollTrigger: {
                trigger: ".growTrigger",
                start: "top 10%",
                end: "+=300",
                scrub: true,
                toggleActions: "restart complete reverse reset",
                //markers: true,
            }
        });


    //POOL OF TEARS ANIMATION WITH SEVERAL LAYERS
    gsap.fromTo(".tears1", { y: '-500' }, {
        opacity: 0.2, scrollTrigger: {
            trigger: ".tearsTrigger",
            start: "top 30%",
            end: "+=300",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            // markers: true,
        }
    });

    gsap.fromTo(".tears2", { y: '-850' }, {
        opacity: 0.2, scrollTrigger: {
            trigger: ".tearsTrigger",
            start: "top 20%",
            end: "+=300",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            //markers: true,
        }
    })

    gsap.fromTo(".tears3", { y: '-1160' }, {
        opacity: 0.2, scrollTrigger: {
            trigger: ".tearsTrigger",
            start: "top 10%",
            end: "+=300",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            // markers: true,
        }
    })

    gsap.fromTo(".tears4", { y: '-1430' }, {
        opacity: 0.25, scrollTrigger: {
            trigger: ".tearsTrigger",
            start: "top 5%",
            end: "+=300",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            // markers: true,
        }
    })

    gsap.fromTo(".tears5", { y: '-1650' }, {
        opacity: 0.4, scrollTrigger: {
            trigger: ".tearsTrigger",
            start: "top 1%",
            end: "+=300",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            //  markers: true,
        }
    })



    gsap.to(document.getElementById('finalText'), { y: '-1800' });



    //CATCH THE RABBIT ANIMATION
    //I keep them both on the side of the screen so the user does not ACTUALLY have to 
    //scrub to click on them if he didn't understand at the first reading
    gsap.fromTo(picturerabbit, { y: '80', x: '500' }, {
        x: '-700', y: '300', scrollTrigger: {
            trigger: catchTrigger,
            start: "top 5%",
            end: "+=700",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            //markers: true,
        }
    })
        ;

    gsap.fromTo(document.getElementById('catchMe'), { y: '-10', x: '210' }, {
        x: '-660', y: '100', scrollTrigger: {
            trigger: catchTrigger,
            start: "top 10%",
            end: "+=700",
            scrub: true,
            toggleActions: "restart complete reverse reset",
            //  markers: true,
        }
    })


    //TIMELINE PART

    //pause:true to run it only at tl.play()
    const tl = gsap.timeline();

    tl.to(document.getElementById('disappearing'), { opacity: 0, duration: 8, repeat: -1, repeatDelay: 1 })
        .to(turned, 1.5, { rotationY: 360, repeat: -1, repeatDelay: 3 }, -2)
        .fromTo(document.getElementById('rabbitTalk'), { x: -250, y: -300, ease: "power3.in" }, { x: 150, y: -100, rotation: 45, duration: 7, repeat: -1 }, -4)
        .to(document.getElementById('alicePic'), { scrollTrigger: 'trigger', scale: 0.5, x: 30, scrub: true })

    tl.play();
})