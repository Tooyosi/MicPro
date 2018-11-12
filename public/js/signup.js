var submit = document.querySelector("button[type='submit']");
submit.addEventListener("click", (e)=>{
// firstname input validation
    var firstname = document.getElementById("firstname");
    var firstVal = firstname.value;
    if(firstVal.trim() == ''){
    var firstError = document.getElementById("firstError");
        firstError.innerHTML = "*** Firstname is required";
         e.preventDefault();
    }

    // lastname input validation
    var lastname = document.getElementById("lastname");
    var lastVal = lastname.value;
    if(lastVal.trim() == ''){
        var lastError = document.getElementById("lastError");
            lastError.innerHTML = "*** Lastname is Required";
            e.preventDefault();
    }
    // username input validation
    var username = document.getElementById("username");
    var userVal = username.value;
    if(userVal.trim() == ''){
        var userError = document.getElementById("userError");
            userError.innerHTML = "*** Username is Required";
            e.preventDefault();
    }

    // phone input validation
    var phone = document.getElementById("phone");
    var phoneVal = phone.value;
    if(phoneVal.trim() == ''){
        var phoneError = document.getElementById("phoneError");
            phoneError.innerHTML = "*** Phone Number is Required";
            e.preventDefault();
    }else if(phoneVal.trim() < 11){
        var phoneError = document.getElementById("phoneError");
            phoneError.innerHTML = "*** Phone Number must be 11 characters long"
            e.preventDefault();
    }

    // age input validation
    var age = document.getElementById("age");
    var ageVal = age.value;
    
    if(ageVal.trim() == ''){
        var ageError = document.getElementById("ageError");
            ageError.innerHTML= "*** Age is required"    
            e.preventDefault();
    }

    // level input validation
    var level = document.getElementById("level");
    var levelVal = level.value;

    if(levelVal.trim() == ''){
        var levelError = document.getElementById("levelError")
            levelError.innerHTML = "*** Level is Required";
            e.preventDefault();
    }

    // email input validation
    var email = document.getElementById("email");
    var emailVal = email.value;

    if(emailVal.trim() == ''){
        var emailError = document.getElementById("emailError");
            emailError.innerHTML = "*** Email is Required"
            e.preventDefault();
    }

    // password and confirm password check
    var password = document.getElementById("password");
    var passVal = password.value;
    var confirm = document.getElementById("cpassword");
    var confirmVal = confirm.value;
    var confirmError = document.getElementById("cpasswordError");
    var passwordError = document.getElementById("passwordError");

    if(passVal.trim() == ''){
            passwordError.innerHTML = "*** Password is Required"
            e.preventDefault();
    }
    if(passVal.trim().length < 6){
            passwordError.innerHTML = "*** Your Password should contain 6 characters"
            e.preventDefault();
    }
    if(confirmVal.trim() == ''){
            confirmError.innerHTML = "*** Confirm Password"
            e.preventDefault();
        } 
    if(passVal != confirmVal ){
        passwordError.innerHTML = "*** Passwords don't match";
        e.preventDefault();
    }

})
