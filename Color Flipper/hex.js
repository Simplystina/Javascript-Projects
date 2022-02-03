const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementsByClassName("button");
const color = document.getElementById("color")


btn[0].addEventListener('click',function(){
    let colors = "#"
    while (colors.length != 2){
        const randomnumber = Math.floor(Math.random()*hex.length)
            if (typeof hex[randomnumber] === "string"){
               colors = colors.concat(hex[randomnumber])
            }
    }

        while (colors.length !== 7){
            const randomnumber = Math.floor(Math.random()*hex.length)
            if((typeof hex[randomnumber] === "number")){
                colors = colors.concat([hex[randomnumber]])
            }
        }

        document.body.style.backgroundColor = colors
        color.textContent = colors

})