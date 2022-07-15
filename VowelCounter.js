

function vowelCounter(word) {
  var counter = 0
  vowels = ['a', 'e', 'i', 'o', 'u']
  word.split("").map((char)=>{
    if(vowels.includes(char))
      counter += 1
  })

    return counter;
  }


  module.exports = vowelCounter;