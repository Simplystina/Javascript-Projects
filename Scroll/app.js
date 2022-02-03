const dated = document.getElementById("date")

dated.innerText = new Date().getFullYear();

const showNav = document.querySelector(".nav-toggle")
const linkscont = document.querySelector(".links-container")
const links = document.querySelector(".links")
const navLinks = document.querySelector(".nav-links")

const containerHeight = linkscont.getBoundingClientRect().height
const linksHeight = links.getBoundingClientRect().height
    console.log(containerHeight)
    console.log(linksHeight)
showNav.addEventListener("click", function(){
    //navLinks.classList.toggle("show-links")
    const containerHeight = linkscont.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    console.log(containerHeight)
    console.log(linksHeight)
    if(containerHeight===0){
        console.log("link is closed now")
        console.log(linksHeight)
        linkscont.style.height = `${linksHeight}px`
        
    }
    else{
        linkscont.style.height = 0
    }

})

const navbar = document.querySelector(".nav-links")

console.log(window.pageYOffset)
window.addEventListener("scroll",function(){
    const navheight = navbar.getBoundingClientRect().height
    const scrollheight = window.pageYOffset
    console.log(navheight, scrollheight)
    if (scrollheight>navheight) {
        navbar.classList.add("fixed-nav")
        
    }
    
    else{
        navbar.classList.remove("fixed-nav")
    }
})


const scrollinks = document.querySelectorAll(".scroll-link")
console.log(scrollinks)