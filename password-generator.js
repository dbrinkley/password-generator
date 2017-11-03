window.addEventListener("load", loadEventListeners);

function loadEventListeners() {
  document.getElementById("btn").addEventListener("click", finalPassword);
  document.getElementById("copyBtn").addEventListener("click", copyTextToClipboard);
}//end of load EventListeners function


const alphabetNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789'.split(''); //creates array with letters
const symbols = '!"#$%&()*+,-.:;<=>?@[]^_`{|}~'.split(''); //creates array with symbols
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //creates array with symbols
let passwordChoices = alphabetNumbers; //arary to hold all available characters for password, inital is alphabetNumbers array


//Checks if checkbox for symbols is checked then adds symbols to passwordChoices
let addSymbols = () => {
  if(document.getElementById("symbol").checked) {
    passwordChoices = passwordChoices.concat(symbols);
  } //END if statement
} //END addSymobls Function

//Checks if checkbox for capitals is checked then adds capital letters to passwordChoices
let addCapitals = () => {
  if(document.getElementById("captial").checked) {
   passwordChoices = passwordChoices.concat(capitals);
  } //END if statement
} //END addSymobls Function


let generatePassword = () => {
  document.getElementById('passwordDisplay').innerHTML = ''; //removes old password when pressing button again
  let password = [];
  let passwordLength = document.getElementById("passwordLengthInput").value; //give value for length inputed in text box

  //adds characters to array depending on length requested
  while(password.length < passwordLength) {
    let random = Math.floor(Math.random() * passwordChoices.length); //gives random number
    password.push(passwordChoices[random]);
  }//END of while loop

  // console.log(password.join(""));

  document.getElementById("passwordDisplay").append(password.join(""));
} //END of generatePassword



let finalPassword = () => {
  addSymbols();
  addCapitals();
  generatePassword();
}//END of generatePassword function




function copyTextToClipboard() {
  let copyText = document.getElementById("passwordDisplay").innerHTML;
  var textArea = document.createElement("textarea");

  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
} //END copyTextToClipboard
