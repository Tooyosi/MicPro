// roles validation
var role =document.getElementById("role");

var roleErr =document.querySelector(".roleErr")

var roleBtn = document.querySelector(".roleBtn");
roleBtn.addEventListener("click", (e)=>{
    var roleVal = role.value;
    if(roleVal.trim() == ''){
        roleErr.innerHTML = "*** Role Field is required";
        e.preventDefault();
    }
})