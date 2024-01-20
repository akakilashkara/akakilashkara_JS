function lab3_task2(sentence) {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i].toLowerCase() === 'a') {
        count++;
      }
    }
  
    return count;
  }
  
  const sentence = "gamArtuli winadadebA";
  const result = lab3_task2(sentence);
  console.log(`Number of 'a' Symbols: ${result}`);

  function lab3_task4(sentence1){
    const codes = []

    for (let i = 0; i < sentence1.length; i++){
        codes.push(sentence1.charCodeAt(i))
    }

    return codes
  }

  const sentence1 = "winadadeba meore"
  const array = lab3_task4(sentence1)
  console.log(array)
  