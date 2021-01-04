// declaring the button as a js variable
var generateBtn = document.querySelector("#generate");

// a string of symbols
var symbString = "!@#$%^&*()"
// an array of individual symbols
var symbArray = symbString.split("")

// a string of letters
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
// an array of individual lower case letters
var lowerArray = lowerCaseString.split("");
// an array of individual upper case letters
var upperArray = lowerCaseString.toUpperCase().split("");

// a string of numbers
var numbString = "1234567890"
// an array of individual numbers
var numbArray = numbString.split("")

console.log(symbArray, upperArray, lowerArray, numbArray);


// This is a function to determine options of password: length, numbers, symbols, upper or lowercase
function getOptions() {
  var length = parseInt(prompt("How many characters in your password (between 8 and 128?)"));

    // if it is a number between 128 and 8 set the length of password
    if(isNaN(length) === true || length > 128 || length < 8) {
      alert("not valid number");
      return;
    }
    console.log(length);
  
  var hasNumb = confirm("Would you like numbers?");

  var hasSymb = confirm("Would you like special symbols?");
 
  var hasLower = confirm("Would you like lowercase letters?");

  var hasUpper = confirm("Would you like uppercase letters?");
 
  
  // if they don't pick anything tell them to pick something
  if(hasLower === false  && hasUpper === false && hasNumb === false && hasSymb === false) {
    alert("Please choose a valid character type");
    return;
  }

  // one object to group all of the option objects
  var options =  {
    length, 
    hasLower, 
    hasUpper,
    hasNumb,
    hasSymb 

  }
  return options;
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
  if(options2.hasNumb === true) {
    bigArray = bigArray.concat(numbArray)
  }
  if(options2.hasSymb === true) {
    bigArray = bigArray.concat(symbArray)
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
