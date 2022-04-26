var txt = 'Have you already complained, as a kid, about a book without any picture?<br> Do you like games and compelling storytelling?<br> What about combining all the avantages of new technologies with literature?<br> Can’t we animate our favorite stories and give them new dimensions thanks to web development, UX design, transmedia storytelling?<br> Follow the white rabbit to find out :)<br> Explore Wonderland through a scrollable website where text and picture animations, user interactions and puzzles are waiting for you to find them. You can read at your own pace: the story and animations unfold as you scroll.<br> <br> Finally, everyone, no matter how experienced they are at reading, can be mesmerized  by a book. It has even been proven that digital reading is actually better to focus and to memorize a story in several cases. It is especially true for those who are learning a new language, people with attention deficit, and children. And who doesn’t fall into any of these categories, today? ';
const words = txt.split(' ');

let about = document.getElementById("aboutText");

var speed = 10;
var i = 0;

//checking if a button has done a certain action
var isDisappearClicked = false;
var isAppearClicked = false;
var hasTypeErased = false;


function erase() {

    // loop through all the nodes 
    var nodes = about.childNodes;

    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        // just checking, but I know in this case I'll only stumble across text nodes.
        if (node.nodeType == Node.TEXT_NODE) {
            node.parentNode.removeChild(node);
            i--; // since we just removed a node from childNodes, we decrease i
        }
    }
}

function typeWriter() {
    //because I use this function recursively, I can't just erase text txt if it's too long
    //so I have to specifically check if the other buttons have printed text or not
    //and if I already have erased that text or not.
    if ((isDisappearClicked && !hasTypeErased) || (isAppearClicked && !hasTypeErased)) {
        erase();
        hasTypeErased = true;
        i = 0; //in case typeWriter has already been used, we start again from the beginning
    }

    about.style.opacity = 1;

    // The text-align: center does not look good for this typewriter effect
    about.style.textAlign = "left";

    if (i < txt.length) {
        //jump over the breaklines divs to not print them
        if (txt.charAt(i) === '<') {
            i = i + 4;
        }
        about.innerHTML += txt.charAt(i);
        i++;
        //new call after a delay
        setTimeout(typeWriter, speed);
    }
}


function hasE(word) {
    for (let index in word) {
        if (word[index] == 'e') {
            return true;
        }
    }
}


//printing only the words that don't have an "e"
function theDisappearance() {
    if (!isDisappearClicked) {
        if (about.innerHTML.length > 100) {
            erase();
        }

        for (let index in words) {

            if (hasE(words[index]) != true) {
                about.innerHTML += words[index] + ' ';
            }
        }
    }
    isDisappearClicked = true;
}


function appear() {
    if (!isAppearClicked) {
        if (about.innerHTML.length > 100) {
            erase();
        }
        about.style.textAlign = "center";
        about.innerHTML += txt;
        gsap.fromTo(about, { y: '200' }, { x: '0', y: '0%' });
    }
    isAppearClicked = true;
}