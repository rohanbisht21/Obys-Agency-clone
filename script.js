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
tl.to(".line h2",{
   animationName: "anime",
   opacity:1,
})
tl.to("#loader", {
  Opacity: 0,
  duration: 0.4,
  delay: 4,
  
});
// page 1 ki aane ki transition
tl.from("page1",{
   delay:0.2,  //ki itne time baad ayga
   y:1600,

   opacity: 0,
   duration:0.5,
   ease:Power4
})
// yeh isliye kyuki doosri page m jaake bhi div hate nahi yaani yeh hata hi nahi bhas dikh nahi raha but wahi placed h to diplay hi none krdi
tl.to("#loader",{
   display:"none"
})
//  27:51
