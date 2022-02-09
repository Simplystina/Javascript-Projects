const btns = document.querySelectorAll(".btn")
const btncont = document.querySelector(".btn-container")
const articles = document.querySelectorAll(".article")
console.log(btns)
// event listener to style a button
btncont.addEventListener("click",function(e){
    id = e.target.dataset.id
    if(id){
       btns.forEach(btn => {
           btn.classList.remove("active")
       }); 
       e.target.classList.add("active")
       articles.forEach(article => {
           article.classList.remove("active")
       });
       const element = document.getElementById(id)
       element.classList.add("active")
    }

        
})

    
