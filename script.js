
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

//Core function to generate password
function generatePassword(){
  var numOfCharacters = numberOfCharacters();
  var characterList = selectCharacterTypes();
  return buildPassword(characterList, numOfCharacters);
}

//Ask user how many characters they want
function numberOfCharacters(){
  return parseInt(prompt("How many characters do you want your password to be?"));
}

//Ask user what types of characters they want and assign those characters
function selectCharacterTypes(){
  var characterTypes = []
  var finalOptions = ""
  characterTypes.push(confirm("Do you want upper case characters?"));
  characterTypes.push(confirm("Do you want lower case characters?"));
  characterTypes.push(confirm("Do you want numbers?"));
  characterTypes.push(confirm("Do you want special characters?"));
  
  if (characterTypes[0] === true){
    finalOptions = finalOptions.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (characterTypes[1] === true){
    finalOptions = finalOptions.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (characterTypes[2] === true){
    finalOptions = finalOptions.concat("1234567890");
  }
  if (characterTypes[3] === true){
    finalOptions = finalOptions.concat("!@#$%^&*()_+=\?><~");
  }
  return finalOptions;
}


//Pick a random character from the selected list
function buildPassword(characterList, numOfCharacters){
  var password = ""
  for (var i=0; i<numOfCharacters; i++){
    var random = characterList[Math.floor(Math.random() * characterList.length)]
    password = password.concat(random)
  }
  return password
}






