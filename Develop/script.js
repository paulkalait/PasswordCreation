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
        window.confirm("hit 'Okay' to confirm if you want your password to be this length.");
      }else{
        alert("Please enter a password length between 8 and 128 characters.")
      }
      //requirement for password to have upper case charachter
  var upperConfirm = window.prompt( "Please enter a password that contains an Upper case Character");
      for (var i = 0; i < upper.length; i++){
        if(upperConfirm === [i]){
          confirm('hit ok if you want your password to have these upper case characters');
        }else{
          prompt('Are you sure you dont want uppercase letter');
        }
      }



    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
