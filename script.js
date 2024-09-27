function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function loadinganimation() {
  document.body.classList.add("no-scroll");
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 200,
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
    duration: 0.4,
    delay: 2.5, //delay 2.5
    // onComplete: function () {
    //   window.scrollTo(0, 0); // Scroll to the top of the page
    // },
    /// chamnge to 3.2
  });
  // tl.from("#page2,#page2,#page4 , #footer",{
  //   opacity:0,
  //  delay: 0.1,
  // })

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    // opacity:0,
    ease: Power4,
  });

  tl.to("#loader", {
    display: "none",
    // window:scrollTo(0, 0)
  });
  tl.from("#nav", {
    opacity: 0,
  });

  //loader animation is completed
  ///firstpage animation

  tl.from("#hero1,.hero h1 , .hero h2 , .hero h3", {
    y: 300,
    stagger: 0.2,
    duration: 0.6,
  });
  tl.from(
    "#hero1,#page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursr() {



  
    Shery.mouseFollower({
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  
    const videoContainer = document.querySelector("#video-container");
    const mouseFollower = document.querySelector(".mousefollower"); 
    const videoCursor = document.querySelector("#video-cursor");
    const video = document.querySelector("#video-container video")

  
    videoContainer.addEventListener("mousemove", (dets) => {
      gsap.to(mouseFollower, {
        opacity: 0,
      });
  
      gsap.to(videoCursor, {
        left: dets.clientX - 380,
        top: dets.clientY -200,
      });
    });
  
    videoContainer.addEventListener("mouseenter", () => {
      gsap.to(mouseFollower, {
        opacity: 1,
      });
    });
  
    videoContainer.addEventListener("mouseleave", () => {
      gsap.to(mouseFollower, {
        opacity: 1,
      });
      gsap.to(videoCursor ,{
       top:" 50%" ,
       left: '50%'
      })

    });
     var status = 0
   videoContainer.addEventListener("click",()=>{
    if(status==0){
      video.play()
       video.style.opacity=1
       videoCursor.innerHTML=`<i class="ri-pause-circle-fill"></i>`
       gsap.to(videoCursor,{
         scale:0,
        
        })
        status=1

    }else{
      video.pause()
      video.style.opacity=0
      videoCursor.innerHTML=`<i class="ri-play-circle-fill"></i>`
      gsap.to(videoCursor,{
        scale:1,
       
       })
       status=0



    }

   })

   

  }


function magnet() {
  Shery.makeMagnet("#navpart-2 h4 ,#nav svg, .hero h2,.elem , .elem2 ,#NAME", {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
function sheryAnimation() {
  Shery.imageEffect("#images", {
    style: 5,
    gooey: true,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}
 function  flag(){
  document.addEventListener("mousemove", function (dets){
    gsap.to("#flag",{
      left:dets.x,
      top:dets.y,
      
    })
  })
  
  document.querySelector('#hero3').addEventListener("mouseenter", function(){
    gsap.to("#flag",{
      opacity:0.5
    })
  })
  document.querySelector('#hero3').addEventListener("mouseleave", function(){
    gsap.to("#flag",{
      opacity:0
    })
  })


 }



// function footeranimation(){
//   var footerani = document.querySelector("#textt");

// // Hover in (mouseenter) - Change font family and fade in
// footerani.addEventListener("mouseenter", function() {
//     gsap.to(footerani, {
//         opacity: 1, // Fade in
//         duration: 3, // Duration of fade in
//         fontFamily: "silk serif",
//         onStart: function() {
//           $(footerani).textillate({ in: { effect: 'fadeIn' } });
//           // Change font family on hover
//         }
//     });
// });

// // Hover out (mouseleave) - Revert font family and fade out
// footerani.addEventListener("mouseleave", function() {
//     gsap.to(footerani, {
//         opacity: 0.5, // Fade out
//         duration: 2, // Duration of fade out
//         fontFamily: "'Arial', sans-serif", // Revert to the original font family
//         onStart: function() {
//           $(footerani).textillate({ Out: { effect: 'fadeOut' } });
//         }
//     });
// });

//  }
 flag()
//  footeranimation()
sheryAnimation();
loadinganimation();
magnet();
locomotive();
cursr();
