import './style.scss'
import 'bootstrap/dist/js/bootstrap.bundle'
import WOW from 'wow.js/dist/wow'
import Typed from 'typed.js';
import counterUp from "counterup2";

let carouselControPre = document.getElementById("2carouselControPre");
let carouselControNext = document.getElementById("2carouselControNext");
let MobilecarouselControPrev = document.getElementById("MobilecarouselBtnPrev");

MobilecarouselControPrev.addEventListener('click',function () {
    document.getElementById("HiddenBtnPre").click();
})

carouselControPre.addEventListener('click',function () {
    document.getElementById("HiddenBtnPre").click();

});
carouselControNext.addEventListener('click',function () {
    document.getElementById("HiddenBtnNext").click();
});
let btn = document.getElementById("flexSwitchCheckDefault");
let value = document.getElementById("value");

function count(){
    let el = document.getElementById("value");
    counterUp( el, {
        duration: 500,
        delay: 10,
        // action : 'stop'

    } )
}

btn.addEventListener("click",function (){
    if(btn.checked === true){
        value.innerText = 49;
        count();
        // value.classList.add('counter');
        // console.log("true")
    }
    else{
        value.innerText = 29;
        count();
        // console.log("false")
    }

    // console.log(btn.checked)
})

var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

var options = {
    strings: ['Developer.','Founder.','Desinger.'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
};

var typed = new Typed('.type-js', options);