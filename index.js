const inputEl = document.getElementById("input-el")
const btnEL = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


btnEL.addEventListener("click", function(){
    let unit = inputEl.value
    const meters = unit * 3.281
    const feet= unit / 3.281

    const liters = unit * 0.264
    const gallons = unit / 0.264

    const kg = unit * 2.204
    const pounds = unit / 2.204



    lengthEl.innerHTML=`${unit} meters = ${meters.toFixed(2)} feet | ${unit} feet = ${feet.toFixed(2)} meters`
    volumeEl.innerHTML=`${unit} liters = ${liters.toFixed(2)} gallons | ${unit} gallons = ${gallons.toFixed(2)} meters`
    massEl.innerHTML=`${unit} kilos = ${kg.toFixed(2)} pounds | ${unit} pounds = ${pounds.toFixed(2)} kilos`

    inputEl.value=null  
})


