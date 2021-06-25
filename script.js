





var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];


function generatePassword(){
  
  var passwordLength = prompt("enter length of password");
  // Add validation for user input
  console.log (passwordLength);
  var containsSpecialCharacters = confirm(
    "Click ok to confirm special characters in your password"
  );
console.log (containsSpecialCharacters);


var containsNumericCharacters = confirm("Click OK to confirm including numeric characters");
console.log(containsNumericCharacters);


var containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters");
console.log(containsLowerCasedCharacters);

var containsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters");
console.log(containsUpperCasedCharacters);
}





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
