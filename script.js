// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write function to generate password
// must be at least 8 characters long and no more than 128 characters
function generatePassword() {

  // Grab all variables for characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*(),./;'<>?:-_=+[]{}\|";

  // prompt for the length of the password

  // Prompt for lowercase, uppercase, numbers, and special characters

  


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
