alert('In this exercise you are a spaceship pilot initiating a mission and the control central will communicate with you. Good luck!')
let pilotName = prompt('Welcome! What is your name, pilot?')
let velocity = 0
let newVelocity = prompt('At what speed do you want to accelerate, ' +pilotName+ '?')
let confirmVelocity = confirm(pilotName+', you are going from ' +velocity+ ' to ' +newVelocity+ ' km/s')
if(confirmVelocity) {
    velocity = newVelocity
}
// If the pilot don't confirm, return 0
if(velocity <= 0) {
    alert('The spaceship is stopped, consider to move it and accelerate it')
} else if(velocity < 40) {
    alert('The spaceship speed is ' + velocity + ' you are slow we can speed it up')
} else if(velocity < 80) {
    alert('The spaceship speed is ' + velocity + ' seems like a good speed to keep')
} else if(velocity < 100) {
    alert('The spaceship speed is ' + velocity + ', high speed, consider slowing down')
} else {
    alert('Dangerous speed, forced automatically control')
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")
