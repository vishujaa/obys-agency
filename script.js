var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#linepart1, .line h2", {
  opacity: 0,
  onStart: function () {
    var val = document.querySelector("#linepart1 h5");
    var grow = 0;
    var intvl = setInterval(function () {
      if (grow < 100) {
        val.innerHTML = grow++;
      } else {
        clearInterval(intvl);
        val.innerHTML = grow;
      }
    }, 35);
  },
});

tl.to(".line h2", {
  AnimationName: "anime",
  opacity: 1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3.2,
});
tl.from("#page1", {
  y: 1200,
  opacity: 0,
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
});
