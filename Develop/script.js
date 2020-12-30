// Assignment Code
var generateBtn = document.querySelector("#generate");

// a string of symbols
var symbolString = "!@#$%^&*()"
// an array of individual symbols
var specialArray = symbolString.split("")

// a string of letters
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
// an array of individual lower case letters
var lowerArray = lowerCaseString.split("");
// an array of individual upper case letters
var upperArray = lowerCaseString.toUpperCase().split("");

console.log(specialArray, upperArray, lowerArray)

// create Number Array
// create Special Array

// This is a function to determine length of password desired
function getOptions() {
  var length = parseInt(prompt("How many characters in your password (between 8 and 128?)"));
  if(isNaN(length) === true || length > 128 || length < 8) {
    alert("not valid number");
    return;
  }
  console.log(length);
  var hasLower = confirm("Would you like lowercase letters?");
  var hasUpper = confirm("Would you like uppercase letters?");
  if(hasLower === false  && hasUpper === false) {
    alert("Please choose a valid character type");
    return;
  }
  var options =  {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper
  }
  return options
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var options2 = getOptions();
  console.log(options2);

  var bigArray = [];
  var results = [];

  if(options2.hasLower === true) {
    bigArray = bigArray.concat(lowerArray)
  }
  if(options2.hasUpper === true) {
    bigArray = bigArray.concat(upperArray)
  }

  for(var i = 0; i < options2.length; i++) {
      var index = Math.floor(Math.random() * bigArray.length);
      console.log(index)
      var digit = bigArray[index];
      results.push(digit)
  }
  return results.join("")
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
