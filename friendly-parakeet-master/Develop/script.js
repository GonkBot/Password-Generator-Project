const characterRange = document.getElementById
("characterRange")
const characterNumber = document.getElementById
("characterNumber")
 
characterNumber.addEventListener("input", syncCharacterAmount)
characterRange.addEventListener("input", syncCharacterAmount)
 
const randomFunc = {
    number: generateNumber,
    special: generateSpecial,
    lower: generateLower,
    upper: generateUpper
}
 
//Checks user inputs
 
generate.addEventListener("click", () => {
    const length = +characterRange.value;
    const checkLower = includeLowercase.checked;
    const checkUpper = includeUppercase.checked;
    const checkNumber = includeNumbers.checked;
    const checkSpecial = includeSpecial.checked;
 
   password.innerText = generatePassword(checkLower, checkUpper, checkNumber, checkSpecial, length)
 
})

 //Functions create random numbers/characters
 
function generateSpecial() {
  const symbols = "#$%*.?&";
  return symbols [Math.floor(Math.random() * symbols.length)]; 
}
 
function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 
function generateLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 
function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Sets the slide bar and character range to display the same value
function syncCharacterAmount(e) {
  const value = e.target.value
  characterNumber.value = value
  characterRange.value = value
 
}
 
function generatePassword(lower, upper, number, special, characterRange){
 
  let generatedPass= "";
 
  const countChecks = lower + upper + number + special;
 
  console.log("countChecks: ", countChecks);
 
  const labelChecks = [{lower}, {upper}, {number}, {special}].filter(item => Object.values(item)[0]);
 
  console.log("labelChecks", labelChecks);
 
  if(countChecks == 0) {
    return "Must have at least one field marked";
  }

//Loops checks until length has been reached and characters have been added

  for(let i=0; i<characterRange; i+=countChecks) {
    labelChecks.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPass += randomFunc[funcName]();
    });
  }
return generatedPass

}

