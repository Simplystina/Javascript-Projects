const closebtn = document.getElementsByClassName("close-btn")
const sidebar = document.getElementsByClassName("side-bar")
const togglebtn = document.getElementsByClassName("sidebar-toggle")
togglebtn[0].addEventListener("click", function(){
    sidebar[0].classList.toggle("show-sidebar")
}) 

closebtn[0].addEventListener("click", function(){
    sidebar[0].classList.toggle("show-sidebar")
})