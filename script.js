//  console.log(counter);

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
  opacity:0,
  duration:0.4,
  delay:2.2,
  onComplete:function(){
    document.getElementById("loader").style.display="none";
  }
});
    
tl.from(".page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power4,
    duration:0.5
})
tl.to("#loader",{
    opacity:"0"
})