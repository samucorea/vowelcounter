
function vowelCounter(word) {
  var counter = 0
  vowels = ['a', 'e', 'i', 'o', 'u']
  word.split("").map((char)=>{
    if(vowels.includes(char))
      counter += 1
  })
  //console.log(counter)
    return counter;
  }
  //vowelCounter("holaa")

  module.exports = vowelCounter;