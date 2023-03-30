gsap.registerPlugin(ScrollTrigger);


new fullpage('#fullpage', {
  anchors:['home', 'destination', 'crew', 'technology'],
  menu: "#menu",
  slidesNavigation: true
});

gsap.from(".home-content__text",{
  y: -50,
  opacity: 0,
  duration: 1
})

gsap.from(".d-content__wrapper",{
  scrollTrigger: "#section1",
  x: -100,
  opacity: 0,
  duration: 1
})

let openTab = (evt, planet) => {
    let tabLinks, mobileTabLinks, tabcontent, i;

    tabcontent = document.getElementsByClassName("d-content__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className = tabcontent[i].className.replace(" active-tab", "");
      }

    tabLinks = document.getElementsByClassName("d-content__tab-btn");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active-btn", "");
      }

    document.getElementById(planet).style.display = "flex";
    document.getElementById(planet).classList.add("active-tab");
    document.getElementById(planet).style.opacity = 1;
    if (evt.target.className == "d-content__tab-btn") {
      evt.target.className += " active-btn";
    }   
}

// SWIPER

var swiper = new Swiper(".crew-content__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".space-launch__swiper", {
  direction: getDirection(),
  pagination: {
    el: ".swiper-pagination-launch",
    clickable: true,
    lidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    }
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = windowWidth <= 1024 ? 'horizontal' : 'vertical';

  return direction;
}