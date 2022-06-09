function getVowels(char) {
  const vowels = ["a", "e", "i", "o", "u"];

  char = char.toLowerCase();
  let foundVowels = [];
 let stringVowel = "Vowels: ";

  for (let i = 0; i < char.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (char[i] === vowels[j]) {
        foundVowels.push(vowels[j]);

        for (let i = 0; i < foundVowels.length; i++) {
          let countVowels = 0;
          for (let j = 0; j < foundVowels.length; j++) {
            if (foundVowels[i] == foundVowels[j]) {
              countVowels++;
            }
            if (countVowels > 1) {
              foundVowels.splice(j, 1);
              j = j + 1;
            }
            
          }
         
        }
        
      }
    }
    
  }

  for (let i = 0; i < foundVowels.length; i++) {
    stringVowel += foundVowels[i];
    if (i < foundVowels.length - 1) stringVowel += ", ";
  }
  console.log(stringVowel);

}
getVowels("Coca Cola");
