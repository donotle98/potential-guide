let slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides
    let index = 0, time = 3000;
    slides[index].classList.add('active');
    setInterval( () => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length) index = 0;
        slides[index].classList.add('active');
    }, time);
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

