function getVowels(character) {
    let vowels = ["a", "e", "i", "o", "u"];
  
    character = character.toLowerCase();
  
    let holdVowels = [];
    for (let i = 0; i < character.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (character[i] === vowels[j]) {
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
  
    let StringVowel = "Vowels: ";
    for (let i = 0; i < holdVowels.length; i++) {
      StringVowel += holdVowels[i];
      if (i < holdVowels.length - 1) StringVowel += ", ";
    }
  
    return StringVowel + [...holdVowels];
  }
  console.log(getVowels(awesome));
