//-submit funcation
function submitForm()
 {
    
    var dataEntered = retrieveData();
   //  console.log("CALL THIS", dataEntered);
    var readData = readingDatafromLocalStorage(dataEntered);
   //  insert(readData);
    validDaName();
    validDataEmail()
    validDataNumber()

}
//--------validation
//-------name validation
function validDaName()
{  
   
   var name=document.getElementById('name').value
   if (name ==null || name==""){  
   alert("Name can't be blank");  
   return false;
}  
}
//-email validation
function validDataEmail()
{
   
   var email= document.getElementById('email').value
  var  emailMatch= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(emailMatch) )
  {
   return true
  }
  else{
   alert("email is not valid")
  }
   
  }  
//-number validation
function validDataNumber()
 {
   
   let z = document.getElementById('phoneNumber').value;
   if(!z.match(/^\d+/))
      {
         alert("only numeric value add 0-9")
      }
      return false;

 }



//retrivedata
  

   
   function retrieveData(){
         var s_name = document.getElementById("name").value;
         var email = document.getElementById("email").value;
         var phoneNumber = document.getElementById("phoneNumber").value;
         var birthDate = document.getElementById("birthDate").value;
         var appointmentTime = document.getElementById("appointmentTime").value;
         var favColor = document.getElementById("favColor").value;
         var Payment = document.getElementById("Payment").value;
         var age= document.getElementById("age").value;
         var course = document.getElementById("course").value;
         var formFile = document.getElementById("formFile").value;


         var arr = [s_name,email,phoneNumber,birthDate,appointmentTime,favColor,Payment,age,course,formFile]
           return arr;

   }
   //add local storage data
   function readingDatafromLocalStorage(dataEntered)
   {
      console.log("local stor")
      var sNm = localStorage.setItem("Name",dataEntered[0]);
     var semail = localStorage.setItem("Email",dataEntered[1]);
     var sPhoneNumber = localStorage.setItem("Phone num",dataEntered[2]);
     var sBirthDate = localStorage.setItem("Birth date",dataEntered[3]);
     var  sAppoinmentTime= localStorage.setItem("Appoinment Time",dataEntered[4]);
     var  sFavColor= localStorage.setItem("fav Color",dataEntered[5]);
     var sPayment = localStorage.setItem("Payment",dataEntered[6]);
     var sAge = localStorage.setItem("Age",dataEntered[7]);
     var sCourse = localStorage.setItem("Course",dataEntered[8]);
     var sFromFile = localStorage.setItem("Photo",dataEntered[9]);
   }
   //get data page table

   function insert(readData) 
   {
      let table = document.getElementsByClassName('myTable')
      


   }