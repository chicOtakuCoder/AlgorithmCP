function Sentence(text){
    let result = {
      charLength: 0,
      wordCount: 0,
      vowelCount: 0,
    }
    
    result.charLength = text.length
    
    let sentenceArray = text.split (' ')
    result.wordCount = sentenceArray.length
    
    let noOfVowel = Array.from(text.toLowerCase())
    result.vowelCount = noOfVowel.filter(letter => 'aeiou'.includes(letter)).length
    return result
    
    }console.log(countSentence("You are blessed."))