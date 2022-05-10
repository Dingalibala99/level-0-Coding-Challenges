function commonLetters(firstNoun, secondNoun) {
  let saveCommonLetters = [];

  for (let i = 0; i < secondNoun.length; i++) {
    for (let j = 0; j < firstNoun.length; j++) {
      if (firstNoun[j].toLowerCase() === secondNoun[i].toLowerCase()) {
        saveCommonLetters.push(firstNoun[j].toLowerCase());
      }
    }
  }
  saveCommonLetters = [...new Set(saveCommonLetters)];

  let commonLetters = "Common characters: ";
  for (let i = 0; i < saveCommonLetters.length; i++) {
    commonLetters += saveCommonLetters[i];
    if (i < saveCommonLetters.length - 1) commonLetters += ", ";
  }
  console.log(commonLetters); 
}
commonLetters("Andile","Anele");
