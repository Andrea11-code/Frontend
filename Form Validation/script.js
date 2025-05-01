var nameError = document.getElementById('name_error');
var phoneError = document.getElementById('ph_error');
var emailError = document.getElementById('email_error');
var passError = document.getElementById('password_error');
var cpassError = document.getElementById('cpass_error');
var addressError = document.getElementById('addr_error');
var submitError = document.getElementById('submit_error');

function validateName(){
    var name = document.getElementById('contact_name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact_phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(isNaN(phone)){
        phoneError.innerHTML = 'Enter numeric values only'
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact_email').value;
    if(email == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    var atposition = email.indexOf("@");  
    var dotposition = email.lastIndexOf(".");  
    if (atposition < 1 || dotposition < atposition + 2 || dotposition+2 >= email.length){  
        emailError.innerHTML = 'Email invalid';
        return false;  
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;
}

function validateAddress(){
    var address = document.getElementById('contact_address').value;
    var required = 30;
    var left = required - address.length;
    if(left>0){
        addressError.innerHTML = left + 'more characters required';
        return false;
    }
    addressError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;

}

function validatePassword(){
    var password = document.getElementById('password').value;
    if(password.length < 6){
        passError.innerHTML = 'Password must be atleast 6 characters long';
        return false;
    }
    passError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;

}


function validateCpassword(){
    var pass1 = document.getElementById('password').value ;
    var cpassword = document.getElementById('cpassword').value;
    if(pass1 != cpassword){
        cpassError.innerHTML = 'Password must be same!';
        return false;
    }
    cpassError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: seagreen; "></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePassword|| !validateCpassword || !validateAddress() ){
        submitError.style.display = 'block' ;
        submitError.innerHTML = 'Please fix the error(s) to submit';
        setTimeout(function(){submitError.style.display = 'none';} , 3000)  // After 3 sec it will hide the error message
        return false; 
    }
    alert('Form submitted Successfully');
    return true;
}
