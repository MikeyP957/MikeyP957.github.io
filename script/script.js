//buttons
var displayEdu = document.querySelector(".expandEdu")
var hideEdu = document.querySelector(".collapseEdu")

displayEdu.addEventListener("click", function(){
    var p = document.querySelector(".asAnEdu");
    var p2 = document.querySelector(".asAnEdu2");
    var b = displayEdu;
    var n = hideEdu;
    
    p.style.display = "block";
    p2.style.display ="block";   
    b.style.display = "none";
    n.style.display = "block";
})
hideEdu.addEventListener("click", function(){
    var p = document.querySelector(".asAnEdu");
    var p2 = document.querySelector(".asAnEdu2");
    var b = displayEdu;
    var n = hideEdu;
    
    p.style.display = "none";
    p2.style.display ="none";   
    b.style.display = "block";
    n.style.display = "none";
})

