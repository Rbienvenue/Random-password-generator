function passwordGenerator (length, includeLowerCaseChars, includeUpperCaseChars, includeNumbers, includeSymbols) {
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

    if (length <= 0) {
        return "Please enter a length greater than 0";
    }
    if (allowedChars.length == 0) {
        return "please select one of the character sets";
    }

    for (let i = 0 ; i < length ; i++) {
        let randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
let password = passwordGenerator (2,true,true,true,true);
let result = document.getElementById("result");
result.textContent=password;