const links = document.querySelector(".links")
const togglebtn = document.getElementsByClassName("nav-toggle")

togglebtn[0].addEventListener("click",function(){
    console.log(links.classList.contains("show-links"))
    links.classList.toggle("show-links")
})