var characterLength = 8;
var choiceArr = [];

var specialCharArr= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','?','~','+','-','_','|','/',]
var lowerCaseArr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',]
var upperCaseArr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',]
var numberArr = ['0','1','2','3','4','5','6','7','8','9',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var newPassword = generatePassword();

  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

//  The function generatePassword() is the math part of the password generator that randomly selects the passwords values.

function generatePassword () {
  console.log("Button is Clicked");
  var password ="";
  for(var i=0; i < characterLength; i++ ) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomLetter];
  }
  return password;
}

// getPrompts() is the overall function that opens all the prompts related to making the password. 
// The While statement makes the user restart the password generation if no values are selected. 

function getPrompts() {
  choiceArr = [];
  characterLength = prompt("How many characters do you want in your password? (8-128 characters)");

  if(isNaN(characterLength) || characterLength <8 || characterLength > 128 ) {
    alert("Character length MUST be a number, 8-128 characters only.")
    return false;
  }
  if (lowCase = confirm("Click OK if you would like to include lower case letters.")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (uppCase = confirm("Click OK if you would like to include upper case letters.")) {
      choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (specSym = confirm("Click OK if you would like to include special characters.")) {
      choiceArr = choiceArr.concat(specialCharArr);
  }
  if (numbers = confirm("Click OK if you would like to include numbers.")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  while (!lowCase && !uppCase && !numbers && !specSym) {
    alert("You must select at least one value for your password. Please try again.")
    return false;
  }
  return true;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);