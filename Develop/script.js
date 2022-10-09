// Assignment code here


// Get references to the #generate element  Creates a var for the HTML button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {

  //var PLength length gets the users' prefered password length from a user prompt
  var PLength = window.prompt ("How many characters long would you like your password be?")


//var The following 4 "Wants" vars get the user's preferences for what kinds of characters to use in their password. For  example WantsLowercase gets the user's preference for lower case as a boolean

var WantsUppers = window.confirm ("Would you like your password to contain UPPER-case letters?")
console.log(WantsUppers)

var WantsLowers = window.confirm ("Would you like your password to also contain LOWER-case letters?")
console.log(WantsLowers)

var WantsNumbers = window.confirm ("Would you like your password to also contain numbers?")
console.log(WantsNumbers)

var WantsSpecial = window.confirm ("Would you like your password to also contain Special Characters?")
console.log(WantsSpecial)

//IF all these confirms are false, the program should show an error and end


//These are the libraries of characters that go into forming tha password character pool. Any number of libraries are chosen by the user with the previous "wants" vars. 
var AllTheCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var AllTheLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var AllTheNumbers = ["0","1","2","3","4","5","6","7","8","9"]
var AllTheSpecial = ["!","@","#","$","%","^","&","*","(",")","~","{","}","[","]",":",";","<",">","?","+","=",]

//Now that the user has selected from 4 types of characters, lets put the selctions all in one place- the character pool aka "CharPool"
var CharPool = [] //creates an empty array, all ready to be populated by any of the following 4 libraries' worth of characters that the user wants, if they want them. The push method takes an array and tacks on another entire array onto it without changing its name or creating a new array. 
if (WantsUppers) {
CharPool.push(...AllTheCaps)
}

if (WantsLowers) {
CharPool.push(...AllTheLowers)
}

if (WantsNumbers) {
CharPool.push(...AllTheNumbers)
}

if (WantsSpecial) {
CharPool.push(...AllTheSpecial)
}


var PasswordArray = []


for (let i = 0; i <PLength; i++) //tacks single letters on the end of the password array one at a time 
  {
  var RandIndex = Math.floor(Math.random()*CharPool.length); //gets a random integer from 0 to CharPool.length to be used to point to a corresponding index location in the the CharPool array. 

  var PWLetter = CharPool[RandIndex] // gets the  element character from the CharPool array using the RandIndex number. 

  PasswordArray.push(PWLetter)// tacks that single letter onto the end of the password array
  }

console.log(PasswordArray)

var FinalPassword =PasswordArray.toString()



//In the following snippet, (FinalPassword.replace(/,/g,""))//takes the commas out of Final Password after toString made a string full of commas

window.alert("Your suggested password:" + FinalPassword.replace(/,/g,""))



}


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters




