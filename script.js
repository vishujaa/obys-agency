function loadinganimation() {
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
      }, 35); // change to 35
    },
  });

  tl.to(".line h2", {
    AnimationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4, //  change to 0.4
    delay: 0, /// chamnge to 3.2
  });
  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  //loader animation is completed
  ///firstpage animation
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from(".hero h1 , .hero h2 , .hero h3", {
    y: 200,
    stagger: 0.2,
    // duration:0.6
  });
}

function cursr() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
}

function magnet() {
  Shery.makeMagnet("#navpart-2 h4 ,#nav svg, .hero h2 ", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

magnet();
cursr();
loadinganimation();
