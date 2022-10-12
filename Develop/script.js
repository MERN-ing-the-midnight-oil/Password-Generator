

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

  //This alerts the user if they chose an unallowed password length
  if(PLength < 8 || PLength >128){
    window.alert("You may not choose a password that is "+PLength+" character(s) long. Please try again and choose a length of at least 8 and no more than 128 characters long.")
    return 
  }
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



//Now that the user has selected from 4 types of characters, I put the selctions all in one array- the character pool, "CharPool"
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

// if charpool is still empty because the user didn't select ANY of the four character types alert "you need to select at least one character type"
// window.alert(saystuff);  Mozilla Dev Network   window.alert syntax
if(CharPool.length === 0) {
  alert ("Please try again and select at least one character type")
  return
}

//This part actually creates the password
var PasswordArray = []//starting with an empty array

for (let i = 0; i <PLength; i++) //this loop tacks single letters on the end of the password array one at a time 
  {
  var RandIndex = Math.floor(Math.random()*CharPool.length); //gets a random integer from 0 to CharPool.length to be used to point to a corresponding index location in the the CharPool array. 

  var PWLetter = CharPool[RandIndex] // gets the  element character from the CharPool array using the RandIndex number. 

  PasswordArray.push(PWLetter)// tacks that single letter onto the end of the password array
  }

//the password is now created but I need to read it out to the user in a dialogue box so we need to make it into text using the .toString method
var FinalPassword =PasswordArray.toString()
//FinalPassword is now a string of characters, unfortuanately they are separated by commas so there is one more step.

//In the following snippet, (FinalPassword.replace(/,/g,""))//takes the commas out of Final Password after toString made a string full of commas
window.alert("Your suggested password is:  " + FinalPassword.replace(/,/g,""))//I found this snipped by googling. It replaces all the commas with whats between the quotes, so, nothing. It gets rid of the commas

}






