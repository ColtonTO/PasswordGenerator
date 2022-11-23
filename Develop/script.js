var characterLength = 8;
var choiceArr = [];

var specialCharArr= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','?','~','+','-','_','|','/',]
var lowerCaseArr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',]
var upperCaseArr = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',]
var numberArr = ['0','1','2','3','4','5','6','7','8','9',]

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  console.log("Button is Clicked");
  var password ="";
  for(var i=0; i < characterLength; i++ ) {
    var randomLetter = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomLetter];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];
  characterLength = prompt("How many characters do you want in your password? (8-128 characters)");

  if(isNaN(characterLength) || characterLength <8 || characterLength > 128 ) {
    alert("Character length MUST be a number, 8-128 characters only.")
    return false;
  }
  if (confirm("Would you like lowercase letters in this password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like uppercase letters in this password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters in this password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in this password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();

  if (correctPrompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);