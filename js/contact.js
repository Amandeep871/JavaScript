  $( function()  {                  // Jquery UI color animation for message box in form
    var state = true;
   if ( state ) {
        $( "#msg" ).animate({
          backgroundColor: "#eee",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#msg" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    
  } ); 

// coding for displaying current year in footer
 function copydate(){
      var cdate = document.getElementById("copyright");
      if(cdate){
          cdate.firstChild.nodeValue= (new Date()).getFullYear();  //date object for getting current year
      }
  }

//IIFE for  calling date object in dateval function
        (function dateval(){
            copydate();
          window.onload = copydate;
        }());

$(document).ready(function() {
     var borderval = {
         marginLeft : "250px",
         width : "650px",
         height : "450px",
         border : "10px solid #600000",
         backgroundColor : "initial",
        borderRadius: "15px",
         boxShadow: "inset -3px -3px 3px 3px #600000"
    
     };
    $('#contact_form').css(borderval);    //Jquery css Method for adding border values
    
    $("#heading").fadeTo("slow",0.4);  //Jquery fadeto method for main heading of page
     
     $("#ft").hover( function ()  {
     $("#ft").slideToggle();          //Jquery slideToggle method for footer
   });
    


     
   var x =  document.getElementById("contact_form").target = "_blank";   //Eveent target blank value for form ,for opening a new window
    
    
             var contact_form = document.getElementById('contact_form');
             contact_form.addEventListener('focus', function(event) {        //addEventListener with focus event for adding color for input box
             event.target.style.background = '#500000';    
             }, true);

            contact_form.addEventListener('blur', function(event) {     //addEventListener with blur event for adding color for input box
             event.target.style.background = '';    
            }, true);  

      $("#contact_form").submit(       //submit method for submitting form
        function(event){
        var isValid = true;
    function isEmail(email) {      //validation values for email
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
        var fname = $("#fname").val().trim();  
        var lname = $("#lname").val().trim();
            
           if((fname=="") && (lname=="")){
                $("#fname").next().text("Firstname cannot be blank.");
                $("#lname").next().text("Lastname cannot be blank.");
                isValid = false;
            }
            else{
                 $("#fname").next().text("");
                 $("#lname").next().text("");
                 localStorage.setItem("fname", fname);
                localStorage.setItem("lname",lname);      //local storage for firstname and lastname section
            }
            
        var email = $("#email").val().trim();
            if(email==""){
                 $("#email").next().text("Email field cannot be blank.");
                 isValid = false;
            }
            else if (!isEmail(email)) {
                 $("#email").next().text("Must be a valid email address.");
                 isValid = false;
            }
            else{
                 $("#email").next().text("");
                localStorage.setItem("email", email);  //local storage for email section
            }
            
         var phone = $("#phone").val().trim();
           if(phone==""){
                 $("#phone").next().text("This field cannot be blank.");
                 isValid = false;
            }
            else{
                 $("#phone").next().text("");
                 localStorage.setItem("phone", phone);   //local storage for email section
          }
         
            $("#fname").val(fname);
            $("#lname").val(lname);
            $("#email").val(email);
            $("#phone").val(phone);
            
            if (isValid == false) {
                event.preventDefault(); 
            }
     
        })
});   

	

