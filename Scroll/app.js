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


window.addEventListener("scroll",function(){
    const navheight = navbar.getBoundingClientRect().height
    const scrollheight = window.pageYOffset
    if (scrollheight>navheight) {
        navbar.classList.add("fixed-nav")
        
    }
    
    else{
        navbar.classList.remove("fixed-nav")
    }
})


const scrollinks = document.querySelectorAll(".scroll-link")

scrollinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        const navheight = navbar.getBoundingClientRect().height
        const linkscontainer = linkscont.getBoundingClientRect().height 
        const fixednav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop-navheight;
        if (!fixednav){
            position = position - navheight
        }
        if(navheight>82){
            position = position+linkscontainer
        }
        window.scrollTo({
            left:100,
            top:position,
        })
        linkscont.style.height=0
    })
});