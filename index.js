  $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
  });

  window.addEventListener("scroll",function(){
    const scrolled= window.scrollY;
    if(scrolled>=50)
    {
     $(".navlinks").css("color","white");
     document.querySelector("nav").classList.add("backdrop-blur");
     document.querySelectorAll("img")[0].classList.add("imagext");
     document.querySelectorAll("img")[1].classList.add("imagext");
     document.querySelectorAll("ul")[1].classList.add("symba");
     document.querySelectorAll("a")[3].classList.add("symbal");
     document.querySelectorAll("a")[4].classList.add("symbal");
     document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i>';
     document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i>';

    }
    else
    {document.querySelector("nav").classList.remove("backdrop-blur");
     document.querySelectorAll("img")[0].classList.remove("imagext");
     document.querySelectorAll("img")[1].classList.remove("imagext");
     document.querySelectorAll("a")[3].innerHTML='<i class="fas fa-phone-alt"></i> +91-7036004562';
     document.querySelectorAll("a")[4].innerHTML='<i class="far fa-envelope"></i> manivishalburra@gmail.com';
     document.querySelectorAll("ul")[1].classList.remove("symba");
     document.querySelectorAll("a")[3].classList.remove("symbal");
     document.querySelectorAll("a")[4].classList.remove("symbal");
     document.querySelector("div").classList.remove("color");
     $(".navlinks").css("color","#ededed");
   }
  })
  var lastScrollTop=0;
navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop>lastScrollTop && scrollTop>770)
{
 navbar.style.top="-80px";
}
else
{
 navbar.style.top="0";
}
lastScrollTop=scrollTop;
});
