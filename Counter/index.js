const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let count = document.getElementsByClassName("value")
console.log(count)

increase.addEventListener("click", function(){
    number = parseInt(count[0].textContent)
    number = number +1;
    count[0].textContent = number
    count[0].style.color = "royalblue"
})

decrease.addEventListener("click", function(){
    number = parseInt(count[0].textContent)
    number = number -1;
    count[0].textContent = number
    count[0].style.color = "green"
})

reset.addEventListener("click", function(){
    number = 0
    count[0].textContent = 0
    count[0].style.color = "gold"
})