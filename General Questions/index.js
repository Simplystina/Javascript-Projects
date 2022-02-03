const btns = document.querySelectorAll(".question-btn")

btns.forEach(element => {
    element.addEventListener("click", function(e){
        const currentbtn = e.currentTarget.parentElement.parentElement
    
        btns.forEach(item => {
            if (item.parentElement.parentElement!== currentbtn){
                item.parentElement.parentElement.classList.remove("show-text")
            }
        })
    currentbtn.classList.toggle("show-text")
    


    })
    
    
    //console.log(element.parentNode.parentNode.parentNode.classList
});
