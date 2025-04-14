function passwordGenerator (length, includeLowerCaseChars, includeUpperCaseChars, includeNumbers, includeSymbols) {
    const result = document.getElementById("result");
    result.style.display = "block";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbols = "!@#$%&*_-=+./,";
    let password = "";
    let allowedChars = "";
    allowedChars += includeLowerCaseChars ? lowerCaseChars : ""; 
    allowedChars += includeUpperCaseChars ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbols : "";

    if (allowedChars.length == 0) {
        result.textContent = "⚠️ please select one of the character sets";
        return "";
    }

    for (let i = 0 ; i < length ; i++) {
        let randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    result.textContent=`Password is: ${password}`;
    return password;
}

function getInput () {
    const result = document.getElementById("result");
    result.style.display = "block";
    const input = document.getElementById("length");
    const length = parseInt(input.value);
    const uppercase = document.getElementById("uppercaseLetters");
    const lowercase = document.getElementById("lowercaseLetters");
    const numbers = document.getElementById("includeNumbers");
    const symbols = document.getElementById("includeSymbols");

    if (length < 1) {
        result.textContent = "⚠️Select a length above 0"
        return;
    }

    const includeLowerCaseChars = lowercase.checked;
    const includeUpperCaseChars = uppercase.checked;
    const includeNumbers = numbers.checked;
    const includeSymbols = symbols.checked;
    
    passwordGenerator (length,includeLowerCaseChars,includeUpperCaseChars,includeNumbers,includeSymbols);
}