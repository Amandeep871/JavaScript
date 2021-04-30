
   $(function(){

          $('.menup').delayText({  // delayText Plugin for text of p tag

           time: 2000

         });

      });

// coding for displaying current year in footer
 function copydate(){
      var cdate = document.getElementById("copyright");
      if(cdate){
          cdate.firstChild.nodeValue= (new Date()).getFullYear();  //date object for getting current year
      }
  }

//IIFE for  calling copydate function in dateval function
        (function dateval(){
            copydate();
          window.onload = copydate;
        }());


 $(document).ready(function () {
 $("#logoimg").animate({          // animate Jquery method or logo image
     height : '100px',
     width : '200px'
 },
    1000);
       $("#ourmenu").append('Menu');  //append Jquery method for adding menu word with our
 });
        
