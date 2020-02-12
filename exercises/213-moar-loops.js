// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals (letter) {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]

  // create an empty array (we will fill this with strings from the previous array)
  var animalsWithoutZ = []
 

  // // 2) loop through "animals"

  for (i=0;i<animals.length; i++) {
   
    if(!animals[i].includes(letter)) {
        animalsWithoutZ.push(animals[i])
    }   
    
  }
  console.log(animalsWithoutZ)
  return animalsWithoutZ
      
      } 

  // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
  //    contains the letter "z"
  //    HINT: remember you can search within a string

  // 4) return "animalsWithoutZ"

removeZAnimals('z')
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)
newArrayOfStrings = []
let work = ['I', 'hope', 'this', 'works', 'z']

function removeAnyWordWithZ (arrayOfStrings, letter) {
//let test = letter.toUpperCase()
  for (i=0;i<arrayOfStrings.length; i++) {
    if ((!arrayOfStrings[i].includes(letter))){
      if ((!arrayOfStrings[i].includes('Z'))){
        newArrayOfStrings.push(arrayOfStrings[i])
  
        }
      }
    }
  console.log(newArrayOfStrings)
  return newArrayOfStrings
}

removeAnyWordWithZ(work,'z')
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
