function getVowels(char) {
    let vowels = ["a", "e", "i", "o", "u"];
  
    char = char.toLowerCase();
  
    let holdVowels = [];
    for (let i = 0; i < char.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (char[i] === vowels[j]) {
          holdVowels.push(vowels[j]);
        }
      }
    }
  
    for (let i = 0; i < holdVowels.length; i++) {
      let countVowels = 0;
      for (let j = 0; j < holdVowels.length; j++) {
        if (holdVowels[i] == holdVowels[j]) {
          countVowels++;
        }
        if (countVowels > 1) {
          holdVowels.splice(j, 1);
          j = j + 1;
        }
      }
    }
  
    let stringVowel = "Vowels: ";
    for (let i = 0; i < holdVowels.length; i++) {
      stringVowel += holdVowels[i];
      if (i < holdVowels.length - 1) stringVowel += ", ";
    }
  
    console.log(stringVowel);
  }
  getVowels("gorgeous");
