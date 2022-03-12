let userName = prompt("Adınız Nedir?")
if (userName == ""){
    userName = "Dünyalı";
}
let myName = document.querySelector('#myName')
myName.innerHTML = `${userName}`

function showTime(){
    let date = new Date().toLocaleString()
    let myClock = document.querySelector('#myClock')
    myClock.innerHTML = `${date}`
}
setInterval(showTime,1000);