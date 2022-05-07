/*Show with prompt the welcome message: "Welcome! Then we will ask you to enter some data"*/
let WelcomeMessage = confirm('Welcome! Then we will ask you to enter some data')
console.log(WelcomeMessage) /* -> (ok)True or (ok)False*/

/*Ask the user inform your name, age and confirm your age*/
let userName = prompt ('What is your name?')
console.log(userName) /*Windows with message field(campo)*/

let userAge = prompt ('What is your age?')
console.log(userAge)

let ageConfirmation = confirm ('Your age is ' + userAge + ' years old?')
console.log(ageConfirmation) /*Windows with message field(campo)*/

alert('name = ' + userName)
alert('age = ' + userAge)
alert('confirmation = ' + ageConfirmation) /*or*/

alert('name = ' + userName + '\nage = ' + userAge + '\nconfirmation = ' + ageConfirmation)
/* \n = line break, like <br> in html */

