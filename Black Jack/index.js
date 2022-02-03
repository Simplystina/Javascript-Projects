var cards =[]
var sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards")
let playername = 'Per'
let playerchip = 145
let playerEl = document.getElementById("player")
let player = {
    name:"Per",
    chips:300
}

let playerrr = document.getElementById("player")
playerrr.textContent = player.name +": $" +player.chips

// let sumEl = document.querySelector("#sum")
       startGame = ()=>{
           let firstcard = GetRandomCard()
           console.log(firstcard)
           let secondCard = GetRandomCard()
           sum = firstcard + secondCard
           cards = [firstcard,secondCard]
           console.log("cards is " + cards)
           return renderGame()
       }

       function GetRandomCard(){
           randomCard =Math.floor(Math.random()*13)+1
           if (randomCard === 1){
               return 11

           }else if(randomCard >=11 && randomCard <=13){
               return 10
           }else return randomCard
       }
        
        renderGame = ()=>{
            if(sum<= 20){
                message = "Do you want a new card?"
                isAlive = true
            } else if (sum ===21){
                message = 'You have black Jack'
                hasBlackJack = true
            } else{
                message = 'You are out of the game '
                isAlive = false
            }
            
           var cardPrint =""; 
            for (let i =0; i<cards.length;i++){
                 cardPrint += cards[i] + " "
            }
            console.log(cardPrint)
            console.log(cards)
            cardEl.textContent = "Cards: "+cardPrint
            messageEl.innerHTML = message
            sumEl.textContent = "Sum: " + sum
        }
        newGame =()=>{ 
            if(isAlive==true && hasBlackJack==false){
                let card = GetRandomCard();
                sum +=card
                cards.push(card)
                return renderGame()  
            }
        }
let messagess = []
var messaged = "I will be a software engineer at Google"
messagess.push(messaged);
messagess.push("I'll intern at Google in 2023")
console.log(messagess)
messagess.pop()


let hands = ["rock", 'paper','scissor']

function print(){
    let randomindex = Math.floor(Math.random()*3)
    return hands[randomindex]
}

console.log(print());