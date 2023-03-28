
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let section = gsap.utils.toArray(".section"),
    observer = ScrollTrigger.normalizeScroll(true),
    scrollTween;

document.addEventListener("touchstart", e => {
  if (scrollTween) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}, {capture: true, passive: false})

function goToSection(i) {
  scrollTween = gsap.to(window, {
    scrollTo: {y: i * innerHeight, autoKill: false},
    onStart: () => {
      observer.disable();
      observer.enable();
    },
    duration: 1,
    onComplete: () => scrollTween = null,
    overwrite: true
  });
}

section.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top bottom",
    end: "+=199%",
    onToggle: self => self.isActive && !scrollTween && goToSection(i)
  });
});

ScrollTrigger.create({
  start: 0, 
  end: "max",
  snap: 1 / (panels.length - 1)
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