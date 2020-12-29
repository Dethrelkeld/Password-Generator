// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseString = "abcdef";
lowerCaseString.split("");
upperCassString = lowerCaseString.toUpperCase()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password1 = "KHLHLHLH" 
  return password1
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
