let myPoints = 3

addPoints=()=>{
    var add = prompt("How many number do you wanna add: ")
    myPoints += parseInt(add);
    console.log(myPoints)
    return myPoints;
}

removePoints=()=>{
    var remove = prompt("How many number do you wanna remove: ")
    myPoints -= parseInt(remove);
    console.log(myPoints)
    return myPoints;
    
}

errortext = errortag.textContent

console.log(errortext)

replace =()=>{
    console.log(errortag.innerHTML)
    return errortag.innerHTML += " something went wrong";
}
