// MOMENT = DATE MANIPULATION LIBRARY

alert('In this exercise we will convert a date inserted by you to another unit time  (seconds, minutes, hours or days). let is do it!')
let departureDateEntry = prompt("Enter the departure date (DD/MM/YYYY format)")

let departureDate = moment(departureDateEntry,"DD/MM/YYYY") // TO TRANSFORM THE DATA IN DATE FORMAT

let today = moment() // () RETURN ATUAL DATE

let dateDiff = today - departureDate // DIFF = DIFERENÇA

let chosenOption = prompt("Choose how you would like to display the departure time\n1- Seconds\n2- Minutes\n3- Hours\n4- Days")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000) // MATH.ROUND = ROUND RESULT
    alert("Flight time: " + secondsOfDeparture + "Seconds")
} else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Flight time: " + minutesOfDeparture + "minutes")
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Flight time: " + hoursOfDeparture + "hours")
} else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Flight time: " + daysOfDeparture + "days")  
} else {
    alert("Invalid Option") // IF IT IS NOT ANY OF THE OPTIONS, ALERT 'INVALID OPTION'
}