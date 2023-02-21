// Assignment Code
var generateBtn = document.querySelector("#generate");
//need to create vars for all the different prompts needed to ask.
var lowerCase ='abcdefghijklmnop';
var upperCase = 'ABCDEFGHIJKLMNO';
var specialChar = '$@#%^&*^&*#@^(((%#$#';
var numberChar ='123456789';
// create the vars for checks

var passwordLength;
var upperCaseCheck;
var specialCharCheck;
var numberCharCheck;
;

function checkLength(){

  passwordLength = promt("Welcome! Please choose a password length betweem 8-128 characters: ");

    if (checkLength<8){alert("Please choose a password with more than 8 characters");
    checkLength(); //makes you return to password selection

    }else if (checkLength>128){alert("Please choose a password with less than 128 characters");
    checkLength();
  
    }else if(checkLength===NaN){alert("Please do better.");
    checkLength();

    }else {alert("The next prompt will have you choose if you would like upper or lower case in your password")
    
  return passwordLength;}
  }

function upperCaseCheck(){

  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

