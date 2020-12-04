function signup(){
    //Email Validation...............................
    const email =  document.getElementById('email').value; 
       let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
       let s = email; 
       if(regex.test(s)){ 
        } 
        else{ 
            alert("inv")
        } 

    // Password Validation.............................
    let newPassword = document.getElementById('Pass').value;
    let minNumberofChars = 6;
    let maxNumberofChars = 16;
    let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        alert("Password Not Acceptable")
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }
    //Phone Validation................................(under conc)
    let phone = document.getElementById('phone').value;
    let regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    let phone1 = phone.match(regExp);
    if (phone1) {
      alert('yes');
     return true;
    }
     alert('no');
     return false;
}