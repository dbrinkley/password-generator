window.addEventListener("load", loadEventListeners);

function loadEventListeners() {
  document.getElementById("btn").addEventListener("click", finalPassword);
  document.getElementById("copyBtn").addEventListener("click", copy);
}//end of load EventListeners function


const alphabetNumbers = 'abcdefghijklmnopqrstuvwxyz0123456789'.split(''); //creates array with letters
const symbols = '!"#$%&()*+,-.:;<=>?@[]^_`{|}~'.split(''); //creates array with symbols
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); //creates array with symbols

let passwordChoices = alphabetNumbers; //arary to hold all available characters for password, starts with alphabetNumbers array



let addSymbols = () => {
  if(document.getElementById("symbol").checked) {
    passwordChoices = passwordChoices.concat(symbols);
  } //END if statement
} //END addSymobls Function

let addCapitals = () => {
  if(document.getElementById("captial").checked) {
   passwordChoices = passwordChoices.concat(capitals);
  } //END if statement

} //END addSymobls Function


let generatePassword = () => {
  document.getElementById('passwordDisplay').innerHTML = ''; //removes old password when pressing button again
  let password = [];
  let passwordLength = document.getElementById("passwordLengthInput").value; //give value for length inputed in text box

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


function copy() {
  let copyText = document.getElementById("passwordDisplay");
  // copyText.innerHTML.select();

  function getSelectionHtml() {
      var html = "";
      if (typeof window.getSelection != "undefined") {
          var sel = window.getSelection();
          if (sel.rangeCount) {
              var container = document.createElement("div");
              for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                  container.appendChild(sel.getRangeAt(i).cloneContents());
              }
              html = container.innerHTML;
          }
      } else if (typeof document.selection != "undefined") {
          if (document.selection.type == "Text") {
              html = document.selection.createRange().htmlText;
          }
      }
      return html;
      html.execCommand("Copy");
  }


}
