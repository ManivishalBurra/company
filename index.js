$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


window.addEventListener("scroll",function(){
  const scrolled= window.scrollY;
  console.log(scrolled);
  if(scrolled>=50)
  {
   $(".navlinks").css("color","black");
   document.querySelector("nav").classList.add("backdrop-blur");
   document.querySelectorAll("img")[0].classList.add("imagext");
   document.querySelectorAll("img")[1].classList.add("imagetext");
   document.querySelectorAll("ul")[1].classList.add("symba");
   document.querySelectorAll("a")[3].classList.add("symbal");
   document.querySelectorAll("a")[4].classList.add("symbal");
   document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i>';
   document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i>';
  }
  else
  {document.querySelector("nav").classList.remove("backdrop-blur");
   document.querySelectorAll("img")[0].classList.remove("imagext");
   document.querySelectorAll("img")[1].classList.remove("imagetext");
   document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i> +91-7993538436';
   document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i> averxdrugs@gmail.com';
   document.querySelectorAll("ul")[1].classList.remove("symba");
   document.querySelectorAll("a")[3].classList.remove("symbal");
   document.querySelectorAll("a")[4].classList.remove("symbal");
   document.querySelector("div").classList.remove("color");
   $(".navlinks").css("color","black");
 }
});
//this is for the closing of nav bar
var lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop>lastScrollTop && scrollTop>2310)
{
navbar.style.top="-90px";
}
else
{
navbar.style.top="0";
}
lastScrollTop=scrollTop;
});
//this is for poping of averxDrugs title;

//this is for parallax effect;
const parallax=document.getElementById("parallax");
window.addEventListener("scroll",function(){
  var offset=window.pageYOffset;

  var intViewportWidth = window.innerWidth;
  var x=792;


 if(offset>=3260 && offset<=4560 &&intViewportWidth>=600)
 {
  offset=offset-3260;
  parallax.style.backgroundPositionY="-"+offset*0.1+"px";
 }
 else if(intViewportWidth>=600)
 {  console.log('intViewportWidth: '+intViewportWidth);
    video.style.backgroundPositionY="-"+offset*0.1+"px";
    offset=offset-x;
    slide2.style.backgroundPositionY="-"+offset*0.1+"px";
    offset=offset-x;
    slide3.style.backgroundPositionY="-"+offset*0.1+"px";
    console.log('newoffset: '+ offset);
 }
});
