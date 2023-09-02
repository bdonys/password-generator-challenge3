// Assignment Code
var generateBtn = document.querySelector("#generate");

  // All variables for characters within a password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*(),./;'<>?:-_=+[]{}|/";

// Write function to generate password
// must be at least 8 characters long and no more than 128 characters
function passwordOptions() {



  // prompt for the length of the password
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Enter password length (8 - 128)")); // parseInt() here turns the string into a value otherwise the prompt wouldn't work
  }
  // Prompt for lowercase, uppercase, numbers, and special characters
  let useLowercase = confirm("Would you like your password to have lowercase characters?");
  let useUppercase = confirm("Would you like your password to have uppercase characters?");
  let useNumbers = confirm("Would you like your password to have numbers?");
  let useSpecial = confirm("Would you like your password to have special characters?");

  //if statement that involves if the user had confirmed character types
  if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecial === false) {
    alert("You must have at least one character!");
  }
  var passwordOptions = {
    length: passwordLength,
    lowercase: useLowercase,
    uppercase: useUppercase,
    numbers: useNumbers,
    special: useSpecial,
  }
  return passwordOptions;
}

function generatePassword() {
  var options = passwordOptions();
  console.log(options);

  let possibleOptions = "";
  if (options.lowercase) {
    possibleOptions += lowercaseChars;
  }
  if (options.uppercase) {
    possibleOptions += uppercaseChars;
  }
  if (options.numbers) {
    possibleOptions += numbers;
  }
  if (options.special) {
    possibleOptions += specialChars;
  }

  console.log(possibleOptions);

  let password = "";
  for (let i = 0; i < options.length; i++) {
    const random = Math.floor(Math.random() * possibleOptions.length);
    password += possibleOptions[random];
  }
  return password;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
