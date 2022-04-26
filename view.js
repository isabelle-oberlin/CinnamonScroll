window.addEventListener('scroll', function () {
    let cursor = window.scrollY;

    //the cat and goBack link appear behind the mountains
    document.getElementById("cat").style.opacity = cursor * 0.6;
    document.getElementById("goBack").style.opacity = cursor * 0.6;

    //parallax scrolling (vertical)
    document.getElementById("p1").style.top = cursor * 0.3 + 'px';
    document.getElementById("p2").style.top = cursor * 0.4 + 'px';
    document.getElementById("p3").style.top = cursor * 0.6 + 'px';
    document.getElementById("p4").style.top = cursor * 0.8 + 'px';
    document.getElementById("p5").style.top = cursor * 1 + 'px';
    document.getElementById("p6").style.top = cursor * 1.2 + 'px';
    document.getElementById("p7").style.top = cursor * 1.4 + 'px';
    document.getElementById("p8").style.top = cursor * 1.5 + 'px';
});