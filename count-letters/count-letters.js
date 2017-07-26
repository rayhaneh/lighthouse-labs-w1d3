function countLetters(str) {
  // Remove everything but word characters
  str = str.replace(/[^\w]/g, '')

  // Intitiallize counter
  var counter = {}

  // Loop through all the letters
  for (var i = 0; i < str.length; i++) {
    key = str.charAt(i)
    // Note: undefined is a falsy
    if (counter[key]) {
      counter[key] += 1
    } else {
      counter[key] = 1
    }
  }
  return counter
}

console.log(countLetters("lighthouse in the house!!"))


