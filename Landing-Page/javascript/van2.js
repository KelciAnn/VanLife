
 function welcomeSign(arg){
     var userName = "";
if (document.forms['regName']["name"].value != "") {
    userName = document.forms['regName']["name"].value;
    userName.toUpperCase();
    document.getElementById('usrName').innerHTML = "Welcome " + document.forms['regName']['name'].value;

}
else {
    return alert('Please fill out the form in order to access the HomePage')
}


 }

 function noAccess(arg){
     
    
        alert("You must register first in order to access this site! No Access!")
 }
       
        
    

     