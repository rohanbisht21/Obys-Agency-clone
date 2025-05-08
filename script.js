function locomotiveAnimation() {
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
function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25, //GSAP's stagger ek powerful feature hai jo aapko ek sequence of elements ko animate karne mein madad karta hai, lekin har element ko thoda sa time difference (delay) ke saath animate karta hai. Iska use tab hota hai jab aapko multiple elements ko ek sath animate karna ho, par unka animation ek hi waqt na ho, balki ek delay ke sath ho, jisse ek beautiful, flowing effect create ho.
    duration: 0.6,
    delay: 0.5,
  });
  // iss code m number badra h loader ka
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    Opacity: 0,
    duration: 0.4,
    delay: 4,
  });
  // page 1 ki aane ki transition
  tl.from("page1", {
    delay: 0.2, //ki itne time baad ayga
    y: 1600,

    duration: 0.6,
    ease: Power4,
  });
  // yeh isliye kyuki doosri page m jaake bhi div hate nahi yaani yeh hata hi nahi bhas dikh nahi raha but wahi placed h to diplay hi none krdi
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 100,
    stagger: 0.2,
  });

  tl.from(
    "#hero1 , #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
function cursorAnimation() {
 Shery.mouseFollower({
  skew:true,
ease:"cubic-beizer(0.23,1,0.320,1 )", 
duration:1,
})
  Shery.makeMagnet("#nav-part2 h4");

  var videoContainer = document.querySelector("#video-container")
var video = document.querySelector("#video-container video")
  videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(dets){
      gsap.to(".mousefollower",{
      opacity: 0,   
       });
      gsap.to("#video-cursor",{
        left:dets.x - 570,
        y:dets.y - 300,
      });
    });
  });
 videoContainer.addEventListener("mouseleave",function(){
  gsap.to(".mousefollower",{
    opacity: 1,
  });
  
 
 gsap.to("#video-cursor",{
  left:"70%",
  top:"-15%",
 });
});



var flag=0
videoContainer.addEventListener("click",function(){
  if(flag == 0){
    video.play()
    video.style.opacity = 1
  document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-line"></i>`
    gsap.to("#video-cusrsor",{
      scale:0.5,
    })
    flag=1

  }else{
    video.pause()
    video.style.opacity = 0
  document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-line"></i>`
    gsap.to("#video-cusrsor",{
      scale:0.5,
    })
    flag=1
  }
 
})
}




function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: 1, range: [-9999999, 9999999] }, // Ensure visible z-index
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      geoVertex: { value: 10, range: [1, 64] }, // Mid-range value for visibility
      noise_scale: { value: 7.74, range: [0, 100] },
    },
    gooey: true, // Ensure gooey is enabled globally
  });
}

loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation();

//1:03:47
