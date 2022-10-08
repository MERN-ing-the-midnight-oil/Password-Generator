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
console.log(PLength)

//var WantsLowercase gets the user's preference for lower case as a boolean


var WantsUppers = window.confirm ("Would you like your password to contain UPPER-case letters?")
console.log(WantsUppers)
var WantsLowers = window.confirm ("Would you like your password to also contain LOWER-case letters?")
console.log(WantsLowers)

var WantsNumbers = window.confirm ("Would you like your password to also contain numbers?")
console.log(WantsNumbers)

var WantsSpecial = window.confirm ("Would you like your password to also contain Special Characters?")
console.log(WantsSpecial)


//These are my libraries of characters that go into forming tha password character pool. Any number of libraries can be chosen. 
var AllTheCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var AllTheLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var AllTheNumbers = ["0","1","2","3","4","5","6","7","8","9"]
var AllTheSpecial = ["!","@","#","$","%","^","&","*","(",")",]

var CharPool = [] //creates an empty array, all ready to be populated by any of the following 4 libraries' worth of characters that the user wants, if they want them
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




var FinalPassword = (PasswordArray.join)

console.log (FinalPassword)


//returns a random integer from 0 to CharPool Length (or length minus one?) this random number will help PickRand pick a random character 
//console.log(rando) 

//var PickRand= Charpick[RandIntex]  //Pickrand will take the value of the character in the character pool at the index chosen randomly in rando


//we need to use RandIndex over and over somehow and populate an array  by concating  then finally turning the array into a string- var string = YourPassWord


//    console.log(AllUpperCases[randomLetter] )







}


//I will need an array that contains 4 booleans (yes or no to character types) and a number (the password length)

//I will need to collect the booleans and number from the user using prompts

//I will need a functin that randomly select characters from character libraries and then strings them together into a password, and then outputs the password



// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page