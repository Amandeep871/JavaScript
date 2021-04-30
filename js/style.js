"use strict";

 $(document).ready(function () {

      $("#preh2").prepend('<h1 class="home">Home</h1>');  //Jquery prepend method for adding home before the paragraph and picture
      $("#imgx").attr("width", "8000");     //Jquery attr method for assigning width to image  
 });


// coding for slider
var index = 0;
 var images =[];   //array for images

images[0] = "images/homeb.jpg";
images[1] = "images/homeb2.jpg";
images[2] =  "images/homeb1.jpg";

 function slideshow(){
     document.slider.src = images[index];
     if(index < images.length - 1){
         index++;
     }
     else{
         index=0;
     }
     setTimeout("slideshow()",2000);   //setTimeout is used for displaying images after 2seconds
 }
window.onload = slideshow;





