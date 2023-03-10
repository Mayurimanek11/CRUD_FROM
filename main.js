function validDaName()
{  
   
   var name=document.getElementById('name').value
   if (name ==null || name==""){  
   alert("Name can't be blank");  
   return false;
}  
}


// function validDataEmail()
// {
   
//    var email= document.getElementById('email').value
//    var atposition=x.indexOf("@");  
//    var dotposition=x.lastIndexOf(".");  
//    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// }



function submitForm()
 {
    
    var dataEntered = retrieveData();
   //  console.log("CALL THIS", dataEntered);
   //  validDataEmail();
    var readData = readingDatafromLocalStorage(dataEntered);
    insert(readData);
    validDataName();

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
      let table = document.getElementById('table')
      var row = table.insertRow();
      row.insertCell(0).innerHTML = readData[0];
      row.insertCell(1).innerHTML = readData[1];
      row.insertCell(2).innerHTML = readData[2];
      row.insertCell(3).innerHTML = readData[3];
      row.insertCell(4).innerHTML = readData[4];
      row.insertCell(5).innerHTML = readData[5];
      row.insertCell(6).innerHTML = readData[6];
      row.insertCell(7).innerHTML = readData[7];
      row.insertCell(8).innerHTML = readData[8];
      row.insertCell(9).innerHTML = readData[9];


   }

