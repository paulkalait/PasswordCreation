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
var specialConfirm;
var numberConfirm;

var choices=[];
var passwordArray=[];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

function generatePassword(){
  debugger
  //prompt that asks for user to enter correct password length
  var passwordLength = window.prompt( "Please enter a password length between 8 and 128 characters.");
      if(passwordLength > 8 && passwordLength < 128){
        window.confirm("hit 'Ok' to confirm if you want your password to be this length.");
        console.log(passwordLength);
      } else{
        alert(" wrong.");
        return;
      };

      //ask if user wants Uppercase in password
  var upperConfirm = window.confirm("hit 'Ok' to confirm if you want your password to have upper case characters");
  if(upperConfirm){ 
    console.log(upperConfirm);
   
  }
      //ask if user wants lower case letters
  var lowerConfirm = window.confirm("hit 'Ok' to confirm if you want your password to have lower case letters");
  if(lowerConfirm){ 
    console.log(lowerConfirm)
  
}
      //ask if user wants special characters
var specialConfirm = window.confirm("hit 'Ok' to confirm if you want your password to have special charaters");
  if(specialConfirm){ 
    console.log(specialConfirm)
    
  }
      //ask if user wants numbers
var numberConfirm = window.confirm("hit 'Ok' to confirm if you want your password to have numbers.");
if(numberConfirm){ 
  console.log(numberConfirm)

} 
  //if statements are unanswered
if(!upperConfirm && !lowerConfirm && !specialConfirm  && !numberConfirm){
  window.alert(" please confirm to the following criterias.");
  generatePassword();
}
//all user's possibilities in else if statements
else if(upperConfirm && lowerConfirm && specialConfirm && numberConfirm){
  choices = upper.concat(lower, special, number)
}else if(upperConfirm && lowerConfirm && specialConfirm){
  choices = choices.concat(upper, lower, special)
}else if(upperConfirm && lowerConfirm && numberConfirm){
  choices = choices.concat(upper,number, lower)
}else if(upperConfirm && specialConfirm && numberConfirm){
  choices = choices.concat(upper,special,number)
}else if(lowerConfirm && specialConfirm && numberConfirm){
  choices = choices.concat(lower,special,number)
}else if(upperConfirm && lowerConfirm){
  choices = choices.concat(upper, lower)
}else if(upperConfirm && numberConfirm){
  choices = choices.concat(upper, number)
}else if(upperConfirm && specialConfirm){
  choices = choices.concat(upper, special)
}else if(lowerConfirm && specialConfirm){
  choices = choices.concat(lower, special)
}else if(lowerConfirm && numberConfirm){
  choices = choices.concat(lower, number)
}else if(numberConfirm && specialConfirm){
  choices = choices.concat(number, special)
}else if(upperConfirm){
  choices = choices.concat(upper)
}else if(lowerConfirm){
  choices = choices.concat(lower)
}else if(specialConfirm){
  choices = choices.concat(special)
}else if(numberConfirm){
  choices = choices.concat(number)
};

//for() loop of the password length
//each time it goes through forloop get one character out of choices (random index of)
for(var i = 0; i < passwordLength; i++){
  character = choices[Math.floor(Math.random() * choices.length)] //Math.Random -ize this line to generate the randomness]
  passwordArray.push(character)
}
//join password array together into a final password string (make password.push into a final password string)
console.log(passwordArray);
return passwordArray.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
