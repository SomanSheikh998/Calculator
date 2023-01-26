var count = 0;

var resetButton = document.getElementById("reset");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
let circle = document.getElementById("circle");

document.getElementById("circle").innerHTML = count
incrementButton.addEventListener("click",()=>{
    count++;
    color();
    document.getElementById("circle").innerHTML = count
})
decrementButton.addEventListener("click",()=>{
    count--;
    color();
    document.getElementById("circle").innerHTML = count
})

function color(){
    if(count > 0){
    circle.style.color = "green";
    }else if(count < 0){
    circle.style.color = "red";
    }else{
    circle.style.color = "black";
    }
}
resetButton.addEventListener("click",()=>{
    count=0;
    document.getElementById("circle").innerHTML = count
    circle.style.color = "black";
})