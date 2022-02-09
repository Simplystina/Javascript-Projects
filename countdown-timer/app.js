const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
const deadline = document.querySelector(".deadline")
const giveaway = document.querySelector(".giveaway")
const items = document.querySelectorAll(".deadline-format h4")



//instead of hardcoding it, we set a functionality such that anytime
//the site opens, it has a ten days countdown
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate() 

//let futureDate = new Date(2022,1,8,11,53 );
const futureDate = new Date(tempYear,tempMonth,tempDay+10, 11,30 )
const year = futureDate.getFullYear()
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = futureDate.getMonth()
const day = futureDate.getDay()
giveaway.textContent = `giveaway ends on ${weekdays[day]} ${futureDate.getDate()} ${months[month]}  ${year}, ${hours}:${mins}am `

const futureTime = futureDate.getTime()

function getRemainingTime(){
    const today = new Date().getTime()
    let millTtime = futureTime-today
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    // calculate all values
    let days = millTtime / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((millTtime % oneDay) / oneHour);
    let minutes = Math.floor((millTtime % oneHour) / oneMinute);
    let seconds = Math.floor((millTtime % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds]

    function format(item){
        if(item<10){
            return `0${item}`
        }
        else{
            return item
        }
    }
    items.forEach((element,index) => {
        element.innerHTML = format(values[index])
    });
    if(millTtime<0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">Sorry, The giveaway has expired</h4>`

    }
    
}
let countdown = setInterval(getRemainingTime,1000)

getRemainingTime()
console.log(deadline.textContent)