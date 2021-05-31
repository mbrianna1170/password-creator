var upperCaseCharacters = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";
// console.log(upperCaseCharacters);
var lowerCaseCharacters = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
// console.log(lowerCaseCharacters);
var numberCharacters = "1, 2, 3, 4, 5, 6, 7, 8, 9";
// console.log(numberCharacters);
var specialCharacters = "!, @, #, $, %, &, *, ?";
// console.log(specialCharacters);


function generatePassword() {
  //creates criteria for length of password
  passwordLength = prompt('Please enter the amount of characters you would like in your password. Choose between 8-128 characters.');
  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Please choose a number between 8-128.")
  } else if (isNaN(passwordLength)) {
    passwordLength = alert('Please choose a number between 8-128.');
  }  
  else {
    confirm('Your password will be' + ' ' + passwordLength + ' ' + 'characters long.');
  }
  //creates confirmation for lower case characters
  lowerCaseLetters = confirm("Select 'OK' to have lower case letters.");
  if (lowerCaseLetters) {
    alert("This password will include lowercase characters.")
  }
  else {
    alert('This password will NOT include lowercase characters.')
  }
  // creates confirmation for upper case characters
  upperCaseLetters = confirm("Select 'OK' to have uppercase letters.");
  if (upperCaseLetters) {
    alert("This password will include uppercase characters.")
  }
  else {
    alert('This password will NOT include uppercase characters.')
  }
  // creates confirmation for special characters
  specialLetters = confirm("Select 'OK' to have special characters such as '$!@%&'.");
  if (specialLetters) {
    alert("This password will include special characters.")
  }
  else {
    alert('This password will NOT include special characters.')
  }
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
