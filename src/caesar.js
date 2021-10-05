// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    // checking if shift exists, equals 0, less than -25 or greater than 25, return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      encode === false;
      return false;

    }
    if (encode == false) {
      // changing shift for decoding
      shift = (26 - shift) % 26;
    }

    if (shift < 0) {
      // allowing negative shift
      shift += 26;
    }

    for (let i = 0; i < input.length; i++) {
      //get the character code of each letter
      let char = input.charCodeAt(i);
      // handle uppercase letters
      if (char >= 65 && char <= 90) {
        result += String.fromCharCode((char - 65 + shift) % 26 + 65);
        // handle lowercase letters
      } else if (char >= 97 && char <= 122) {
        result += String.fromCharCode((char - 97 + shift) % 26 + 97);
        // its not a letter, let it through
      }
      else {
        result += input.charAt(i);
      }
    }


    console.log(result, ":result")
    return result.toLowerCase();

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
