// Assignment code here
document.querySelector('#generate').addEventListener("click", writePassword);

//Define Arrarys to fullfill all the options
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["`", "~", "!", "@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","|", "[","]","<",">","?","/","'",];
var number = ["1","2","3","4","5","6","7","8","9","0"];

//Variables assigned
var passwordLength;
var upperConfirm;
var lowerConfirm;
var specialConfrim;
var numberConfirm;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //prompt that asks for user to enter correct password length
  var passwordLength = window.prompt( "Please enter a password length between 8 and 128 characters.");
      if(passwordLength >= 8 || passwordLength <= 128){
        console.log(passwordLength);
        window.confirm("hit 'Ok' to confirm if you want your password to be this length.");
      }else{
        alert("Please enter a password length between 8 and 128 characters.")
      }
      //ask if user wants Uppercase in password
  var upperConfirm = window.prompt( "would you like your password to create a Upper case Characters");
      window.confirm("hit 'Ok' to confirm if you want your password to have upper case characters");
  if(upperConfirm){ 
    return true;
  }
  var lowerConfirm = window.prompt( "would you like your password to create a lower case Characters");
      window.confirm("hit 'Ok' to confirm if you want your password to have lower case letters");
  if(lowerConfirm){ 
    return true;
}
var specialConfrim = window.prompt( "would you like your password to create special Characters");
      window.confirm("hit 'Ok' to confirm if you want your password to have special charaters");
  if(specialConfirm){ 
    return true;
  }
var numberConfirm = window.prompt( "would you like your password to have numbers");
    window.confirm("hit 'Ok' to confirm if you want your password to have numbers.");
if(numberConfirm){ 
  return true;
} while(upperConfirm === false && lowerConfirm === false && specialConfrim === false && numberConfirm){
  window.alert(" please confirm if the following criterias.");
}



    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
