// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write function to generate password
// must be at least 8 characters long and no more than 128 characters
function generatePassword() {

  // All variables for characters within a password
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*(),./;'<>?:-_=+[]{}|/";
  // prompt for the length of the password
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Enter password length (8 - 128)"));
  }
  // Prompt for lowercase, uppercase, numbers, and special characters
  const useLowercase = ;
  const useUppercase = ;
  const useNumbers = ;
  const useSpecial = ;

  //if statement that involves if the user had confirmed character types
  



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
