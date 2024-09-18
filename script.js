//  console.log(counter);

function loadinganimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from(".firstpart , .line h2", {
    opacity: 0,
    onStart: function () {
      var timer = document.querySelector(".line .firstpart h5");
      var counter = "0";
      setInterval(() => {
        if (counter < 100) {
          timer.innerHTML = counter++;
        } else {
          timer.innerHTML = counter;
        }
      }, 20);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay:2.2,
    onComplete: function () {
      document.getElementById("loader").style.display = "none";
    },
  });

  tl.from(".page1", {
    delay: 0,
    y: 1600,
    // opacity:0,
    ease: Power4,
    duration: 0.9,
  });
  tl.to("#loader", {
    opacity: "0",
  });

  tl.from(".nav", {
    opacity: 0,
    // delay: 0.1,
  });

  tl.from("#hero1 h1, #hero2 h1, #hero3 h2  , #hero4 h1" , {
    y: 120,
    duration: 1,
    stagger:0.2,
  });
}


function cursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".curser", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet(".navtwo h4", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
loadinganimation();
cursor();
