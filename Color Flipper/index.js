const colors =["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementsByClassName("button");
const color = document.getElementById("color")


btn[0].addEventListener('click',function(){
    const randomnumber = Math.floor(Math.random()*colors.length)
    if (colors[randomnumber] in colors){
        document.body.style.backgroundColor = colors[randomnumber]
        color.textContent = colors[randomnumber]
    }
    document.body.style.backgroundColor = colors[randomnumber]
    color.textContent = colors[randomnumber]
})


