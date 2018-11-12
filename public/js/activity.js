var activity =document.getElementById("activity");

var activityErr =document.querySelector(".activityErr")

var submit = document.querySelector(".activityBtn");
submit.addEventListener("click", (e)=>{
    var activityVal = activity.value;
    if(activityVal.trim() == ''){
        activityErr.innerHTML = "*** Activity field is required";
        e.preventDefault();
    }
})

