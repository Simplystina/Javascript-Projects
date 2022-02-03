let myleads = []
const button = document.getElementById("savebtn");
const inputbtn = document.getElementById("input")
const listitem = document.getElementById("ulE")
const deletebtn = document.getElementById("deletebtn")
const savetab = document.getElementById("savetab")
//localStorage.setItem("myleads","www.google.com ")
 //console.log(localStorage.getItem("myleads"))

 const tabs = [{
     url: "https://www.linkedin.com/in/per-harald-borgen/"
 }]

const arrays = localStorage.getItem("myLeads")
console.log(JSON.parse(arrays))
if (arrays){
    myleads = JSON.parse(arrays)
    renderLeads();
}
button.addEventListener("click",function(){
    myleads.push(inputbtn.value)
    inputbtn.value = ""  
    arr = JSON.stringify(myleads)
    localStorage.setItem("myLeads",arr)
    renderLeads();

    console.log(localStorage.getItem("myLeads"))
             
})
deletebtn.addEventListener("click",function(){
    localStorage.clear();
    //console.log(JSON.parse(localStorage.getItem("myleads")))
    myleads = []
    renderLeads();
})

savetab.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow:true}, function(tabs){
        let activeTab = tabs[0];
        let actuveTabId = activeTab.id;
    })
    savedtabs = JSON.stringify(tabs[0].url)
    localStorage.setItem("myLinks",savedtabs)
    console.log(savedtabs)
})
function renderLeads(){
    let listItems = ""
    if (myleads){
        for(let i=0;i<myleads.length;i++){ 
            if (myleads[i]!==""){
                listItems += `
                <li> 
                   <a target='_blank' href='${myleads[i]}'>${myleads[i]}
                </a>
                </li>`
        }
            
            
//OR
 /*const li  = document.createElement("li")
li.textContent = myleads[i]
listitem.append(li)
            */
           }
    }
listitem.innerHTML = listItems
 } 

    
//practicing turning strings to array in localstorage

    let arr = '["www.awesomelead.com"]'

    //turn the array string into an array
    arr = JSON.parse(arr)
    //push a new value to the array
    arr.push("www.leads.com")
    //turn the array into a string

    arr = JSON.stringify(arr)
    //console.log the string to verify that it's a string
    //console.log(typeof  arr)

function sentence_generator(desc, array){
    if(typeof desc === "string")and(typeof array === "object");{
        let sentence = `The ${array.length} ${desc} are `
        for (let i=0;i<array.length;i++){
            sentence += array[i] + " "
        }
        return sentence
    }

}
let descr = "best fruits"
array = ["apple","banana"]
console.log(sentence_generator(descr,array))
console.log(typeof "strrrrr" === "string")