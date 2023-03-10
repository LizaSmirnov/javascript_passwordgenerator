// Assignment Code
var generateBtn = document.querySelector("#generate");
//need to create vars for all the different prompts needed to ask.
var lowerCase = 'abcdefghijklmnop';
var upperCase = 'ABCDEFGHIJKLMNO';
var specialChar = '$@#%^&*^&*#@^(((%#$#';
var numberChar = '123456789';
var userChoices = '';
var password = '';
// create the vars for checks

var passwordLength;
var upperCaseCheck;
var lowerCaseCheck;
var specialCharCheck;
var numberCharCheck;


function checkLength() {

  passwordLength = prompt("Welcome! Please choose a password length betweem 8-128 characters: ");

  if (passwordLength < 8) {
    alert("Please choose a password with more than 8 characters");
    checkLength(); //makes you return to password selection

  } else if (passwordLength > 128) {
    alert("Please choose a password with less than 128 characters");
    checkLength();

  } else if (isNaN(passwordLength)) {
    alert("Please do better.");
    checkLength();

  } else {
    alert("The next prompt will have you choose if you would like upper or lower case in your password");
    promptForOptions();
    generatePassword();
  }
}

function promptForOptions(){

  upperCaseCheck = confirm("Please choose if you would like any uppercase letters in your password.\n Yes or No.");

  lowerCaseCheck = confirm("Please choose if you would like any lower case letters in your password.\n Yes or No.");

  specialCharCheck = confirm("Please choose if you would like any special characters in your password.\n Yes or No.");

  numberCharCheck= confirm("Please choose if you would like any number included in your password.\n Yes or No.");
  return checkLength;
}

function generatePassword(){
  if (lowerCaseCheck===true){
    userChoices = userChoices + lowerCase;
  } else  {
    userChoices = userChoices +'';
  };
  // -- dump all the lower case letter  into userChoices

  // if the user wanted uppercase
  // -- dump all the uppercase into userChoices
  if (upperCaseCheck===true){
    var userChoices = userChoices + upperCase;
  } else {
    var userChoices = userChoices +'';
  };

  // if the user wanted x
  // -- dump all the x into userChoices
  if (specialCharCheck===true){
    var userChoices = userChoices + specialChar;
  } else {
    var userChoices = userChoices +'';
  };

  // if the user wanted x
  // -- dump all the x into userChoices
  if (numberCharCheck===true){
    var userChoices = userChoices + numberChar;
  } else {
    var userChoices = userChoices +'';
  };
  
  for(var i = 0; i < passwordLength; i++){
    password += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
  }
  console.log('password',password);
  // return password;



  
  //reach into the html - grab the text area
  var passwordTextArea = document.querySelector("#password");
  //stuff your password into that textareas value
  passwordTextArea.value = password;
  console.log(passwordTextArea.value);
}



// Add event listener to generate button
generateBtn.addEventListener("click", checkLength);
