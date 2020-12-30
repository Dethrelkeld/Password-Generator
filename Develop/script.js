// Assignment Code
var generateBtn = document.querySelector("#generate");

// a string of symbols
var symbolString = "!@#$%^&*()"
// a string of letters
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
// an array of individual lower case letters
var lowerArray = lowerCaseString.split("");
// an array of individual upper case letters
var upperArray = lowerCaseString.toUpperCase().split("");
console.log(upperArray)
// create Number Array
// create Special Array

function getOptions() {
  var length = parseInt(prompt("How long between 8 and 128?"));
  if(isNaN(length) === true || length > 128 || length < 8) {
    alert("not valid number");
    return;
  }
  console.log(length);
  var hasLower = confirm("lower ok");
  var hasUpper = confirm("has upper");
  if(hasLower === false  && hasUpper === false) {
    alert("Please choose one valid character type");
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
