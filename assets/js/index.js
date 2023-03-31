
new fullpage('#fullpage', {
  anchors:['home', 'planet-destination', 'crew', 'technology'],
  menu: "#menu",
  slidesNavigation: true,
  onLeave: function(origin, destination, direction) {
    if(origin.index == 0) {
      document.querySelector(".d-animate-title").classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
      document.querySelector(".planet-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-2s");
      document.querySelector(".tab-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-3s");
      document.querySelector(".mobile-tab-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-3s");
      document.querySelector(".planet-desc-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-3s");
    }
    if(origin.index == 1) {
      document.querySelector(".crew-title-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
      document.querySelector(".crew-pagination-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
      document.querySelector(".crew-desc-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
      document.querySelector(".crew-img-animate").classList.add("animate__animated", "animate__fadeInUp", "animate__delay-2s");
    }
    if(origin.index == 2) {
      document.querySelector(".launch-title-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-1s");
      document.querySelector(".launch-desc-animate").classList.add("animate__animated", "animate__zoomIn", "animate__delay-2s");
      document.querySelector(".space-launch__pagination").classList.add("animate__animated", "animate__zoomIn", "animate__delay-3s");
      document.querySelector(".launch-img-animate").classList.add("animate__animated", "animate__fadeInRight", "animate__delay-3s");
      
    }
  }
});

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