var degree =document.querySelector(".degreeName")
var title =document.querySelector(".degreeTitle")
var inst =document.querySelector(".degreeInst")
var year =document.querySelector(".degreeYear")

var nameErr =document.querySelector(".nameErr")
var titleErr =document.querySelector(".titleErr")
var instErr =document.querySelector(".instErr")
var yearErr =document.querySelector(".yearErr")

var submit = document.querySelector(".degreeBtn");
submit.addEventListener("click", (e)=>{
    // Degree name input validation
    var nameVal = degree.value;
    if(nameVal.trim() == ''){
        nameErr.innerHTML = "*** Name of the Degree is Required";
        e.preventDefault()
    }

    // Degree title  validation
    var titleVal = title.value;
    if(titleVal.trim() == ''){
        titleErr.innerHTML = "*** Title of the Degree is required";
        e.preventDefault();
    }

    // Degree institution validation
    var instVal = inst.value;
    if(instVal.trim() == ''){
        instErr.innerHTML = "*** Institution Awarded is Rquired";
        e.preventDefault();
    }

    // Degree year validation
    var yearVal = year.value;
    if(yearVal.trim() == ''){
        yearErr.innerHTML = "*** Year Awarded is Required";
        e.preventDefault();
    }
})