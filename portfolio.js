var modalBody = document.querySelectorAll(".modal-body");
var portfolioBox = document.querySelectorAll(".portfolio-box");
var category = document.getElementsByClassName("categories");
var images = document.querySelectorAll(".images");
var web = document.querySelectorAll(".web");
var ux = document.querySelectorAll(".ui");
var frontEnd = document.querySelectorAll(".frontend");
// for (var t = 0; t < images.length; t++) {
//      images[t].classList.remove("animated");
     
//  }
category[0] = images;
category[1] = web;
category[2] = ux;
category[3] = frontEnd;
 
var what = "Hello world"
for(var i = 11; i > what.length; i--) {
    console.log[i];
}
    category[0].addEventListener("click", function() {
        category[0].classList.add("selected")
        category[1].classList.remove("selected")
        category[2].classList.remove("selected")
        category[3].classList.remove("selected")
for (var i = 0; i < images.length; i++) {
       images[i].classList.remove("animated") 
    if(images[i]) {
        images[i].style.display = "block"
    }
    else{
        alert("danger");
    }
} 
});
    category[1].addEventListener("click", function() {
    category[1].classList.add("selected")
    category[0].classList.remove("selected")
    category[2].classList.remove("selected")
    category[3].classList.remove("selected")
  for (var i = 0; i < web.length; i++) {
        web[i].classList.add("animated")
      if (web[i]) {
        web[i].style.display = "block";
        ux[0].style.display = "none";
        ux[1].style.display = "none";
        frontEnd[i].style.display = "none";
           
  } else{
  }
  }
});
    category[2].addEventListener("click", function() {
     category[2].classList.add("selected")
    category[0].classList.remove("selected")
    category[1].classList.remove("selected")
    category[3].classList.remove("selected")
  for (var i = 0; i < ux.length; i++) {
        ux[i].classList.add("animated")
      if (ux[i]) {
        ux[i].style.display = "block";
        web[0].style.display = "none";
        web[1].style.display = "none";
        web[2].style.display = "none";
        frontEnd[0].style.display = "none";
        frontEnd[1].style.display = "none";
        frontEnd[2].style.display = "none";
           
  } else{
    }
  }
 
});
    category[3].addEventListener("click", function() {
     category[3].classList.add("selected")
    category[0].classList.remove("selected")
    category[2].classList.remove("selected")
    category[1].classList.remove("selected")
  for (var i = 0; i < frontEnd.length; i++) {
        frontEnd[i].classList.add("animated") 
      if (frontEnd[i]) {
        frontEnd[i].style.display = "block";
        web[0].style.display = "none";
        web[1].style.display = "none";
        web[2].style.display = "none";
        ux[0].style.display = "none";
        ux[1].style.display = "none";
          
           
  } else{
  }
  }
});



    portfolioBox[0].addEventListener("click",function(){
        if (portfolioBox[0]) {
            modalBody[0].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[1].addEventListener("click",function(){
        if (portfolioBox[1]) {
            modalBody[1].style.display = "block";
            modalBody[0].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[2].addEventListener("click",function(){
        if (portfolioBox[2]) {
            modalBody[2].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[3].addEventListener("click",function(){
        if (portfolioBox[3]) {
            modalBody[3].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[4].addEventListener("click",function(){
        if (portfolioBox[4]) {
            modalBody[4].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[5].addEventListener("click",function(){
        if (portfolioBox[5]) {
            modalBody[5].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[6].addEventListener("click",function(){
        if (portfolioBox[6]) {
            modalBody[6].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[2].style.display = "none";
            modalBody[7].style.display = "none";
        }
    });
    portfolioBox[7].addEventListener("click",function(){
        if (portfolioBox[7]) {
            modalBody[7].style.display = "block";
            modalBody[1].style.display = "none";
            modalBody[0].style.display = "none";
            modalBody[3].style.display = "none";
            modalBody[4].style.display = "none";
            modalBody[5].style.display = "none";
            modalBody[6].style.display = "none";
            modalBody[2].style.display = "none";
        }
    });

