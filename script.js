
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
  var numCharacters = 0
  while (numCharacters < 8 || numCharacters > 128){
    numCharacters =  parseInt(prompt("How many characters do you want your password to be?"));
    if (numCharacters >= 8 && numCharacters <= 128){
      return numCharacters
    }
    else {
      alert("Please enter a number between 8 and 128.")
      numCharacters = 0
    }
  }
}

//Ask user what types of characters they want and assign those characters
function selectCharacterTypes(){
  var finalOptions = ""

  while (finalOptions === ""){
    var characterTypes = []
    
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
    if (finalOptions === ""){
      alert("Please choose at least one character type");
    }
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






