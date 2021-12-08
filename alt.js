let content = "My name is Yvonne"

function sentence(text){

  let charLength = 0
  let wordCount = 1
  let vowelCount = 0

  let charMap = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u'
  }

  charLength = text.length

  for (let i = 1; i < text.length; i++) {
    if (text[i] == " " && text[i - 1] != " ") {
      wordCount += 1
    }
    if (text[i].toLowerCase() in charMap) {
      ++vowelCount
    }
  }
  return {charLength, wordCount, vowelCount}
}

console.log ( sentence(content) )