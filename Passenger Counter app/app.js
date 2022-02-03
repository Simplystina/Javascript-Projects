const cout = document.getElementById("count");
let savedEntries = document.getElementById("saved");
console.log(cout)
coutInt=parseInt(cout.textContent)

console.log(cout.textContent);

increase = increment=> {
     
     coutInt = coutInt+1;
     cout.innerText = coutInt;
}

save = ()=>{
    let countstr= " " +coutInt + "  -  ";
    cout.innerText = 0;
    return savedEntries.innerText+=countstr;
}

greetLinda = (name,greeting)=>{
    console.log(greeting +" "+ name);
}

greetLinda("Linda","Hello ")
let welcome = document.getElementById("welcome");


let name=" Chidinma Nwatu"
let greeting = "Welcome back" + name

welcome.innerHTML = greeting;

welcome.innerText  += " emoji";

