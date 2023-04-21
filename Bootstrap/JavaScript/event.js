var grandparent = document.getElementById("grandparent")
grandparent.addEventListener("click",function(value){
    grandparent.style.backgroundColor = "blue"
    value.stopPropagation();
})
var parent = document.getElementById("parent")
parent.addEventListener("click",function(value){
    parent.style.backgroundColor = "purple"
    value.stopPropagation();
})  
var child = document.getElementById("child")
child.addEventListener("click",function(value){
    child.style.backgroundColor = "pink"
    value.stopPropagation();
   console.log(value.eventPhase)
})