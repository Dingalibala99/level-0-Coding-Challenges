function getCommonLetters(string1, string2) {
  let commonCharacters = [];
  for (let i = 0; i < string2.length; i++) {
    for (let j = 0; j < string1.length; j++) {
      if (string1[j].toLowerCase() === string2[i].toLowerCase()) {
        commonCharacters.push(string1[j].toLowerCase());
      }
    }
  }
  commonCharacters = [...new Set(commonCharacters)];

  let sameLetters = "Common letters: ";
  for (let i = 0; i < commonCharacters.length; i++) {
    sameLetters += commonCharacters[i];
    if (i < commonCharacters.length - 1) sameLetters += ", ";
  }

  console.log(sameLetters);
}

getCommonLetters("Andile", "Anele");
