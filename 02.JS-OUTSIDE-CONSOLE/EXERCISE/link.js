alert('Hello, in this exercise we are going to calculate the age difference between two of your friends. Here we go!')
let WelcomeMessage = confirm('Welcome! In this exercise we will ask you to enter some data')
console.log(WelcomeMessage)

let userName =prompt('Please, tell us your name')

let olderFriend =prompt('Please, '+userName+' , tell us the name of your older friend')
let ageOlderFriend =prompt('Please, '+userName+' ,tell us the age of your older Friend')

let youngerFriend =prompt('Please, '+userName+', tell us the name of your younger Friend')
let ageYoungerFriend =prompt('Please, '+userName+', tell us the age of your younger Friend')

let calcAges = ageOlderFriend-ageYoungerFriend

alert(userName + ', this is your result:' + '\n\nyour oldest friends name is  ' +olderFriend+ ' and he/she have ' +ageOlderFriend+' years old' +
'\n\nyour youngest friends name is ' +youngerFriend+ ' and he/she have ' +ageYoungerFriend+' years old' +
'\n\nThe difference between their ages is '+calcAges)

