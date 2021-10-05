// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  let regAlpha = 'abcdefghijklmonpqrstuvwxyz';
  function substitution(input, alphabet = " ", encode = true) {
    // your solution code here
    let message = '';

    //  checking if alphabet, also if alphabet is 26 characters in length
    if (!alphabet || alphabet.length !== 26) {
      encode == false;
      return false;
    }

    // checking for unique characters of alphabet 
    for (letter of alphabet) {
      if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)) {
        encode == false;
        return false;
      }
    }

    // encoding messages
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let index = regAlpha.indexOf(input[i]);
        if (index === -1 && input[i] === " ") {
          message += " "
        } else {
          message += alphabet[index];
        }
      }
    } else {
      // decoding messages
      for (let i = 0; i < input.length; i++) {
        let index = alphabet.indexOf(input[i]);
        if (index === -1 && input[i] === " ") {
          message += " ";
        } else {
          message += regAlpha[index];
        }
      }
    }
    return message
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
