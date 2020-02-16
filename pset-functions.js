/***********
Problem: Triangles

Determine if a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

A scalene triangle has all sides of different length

Create a function named `typeOfTriangle()` that accepts three (3) parameters s1, s2 and s3. The function will return

"equilateral" if the three (3) sides are the same
"isosceles" if two (2) sides are the same
"scalene" if all three (3) sides are different

"not a triangle" if any of the sides are <= 0

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. typeOfTriangle(4, 4, 4)

   Expected Result: "equilateral"

2. typeOfTriangle(0, 4, 7)

   Expected Result: "not a triangle"

3. typeOfTriangle(9, 8, 9)

   Expected Result: "isosceles"

4. typeOfTriangle(12, 8, 7)

   Expected Result: "scalene"

************/
console.log('Problem 1:')

// Add your code below this line

// type of triangle function
function typeOfTriangle(s1, s2, s3) {

  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    // any sides <= 0? not a triangle
    console.log("not a triangle")
  } else if (s1 === s2 && s1 === s3) {
    // equal sides? thats a equilateral
    console.log("equilateral")
  } else if (s1 === s2 && s1 !== s3 || s1 === s3 && s1 !== s2) {
    // one side different than the other two, that's isosceles
    console.log("isosceles")
  } else {
    // anything else? scalene bro
    console.log("scalene")
  }
}

// check our work
typeOfTriangle(4, 4, 4)
typeOfTriangle(0, 4, 7)
typeOfTriangle(9, 8, 9)
typeOfTriangle(12, 8, 7)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********

Problem: Random Number Generator

Create a function that accepts an "upToNumber" as a parameter that generates a random number from 1 to the specifed "upToNumber"


Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. randomNumber(100)

   Expected Result: a random number (integer)  from 1 to 100

2. randomNumber(25)

   Expected Result: a random number (integer) from 1 to 25

3. randomNumber(1500)

   Expected Result: a random number (integer) from 1 to 1500

************/
console.log('Problem 2:')

// Add your code below this line
// random number generator based on instructions
function randomNumber(upToNumber) {
  console.log(Math.floor(Math.random() * upToNumber + 1))
}

// working this out with smaller numbers
// really be hard to prove test cases without some distribution catcher
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)
randomNumber(5)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Odd Number Checker


Create a function that accepts a "number" as a parameter and returns true if the number is an odd number and false if the number is an even number

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isOdd(3)

   Expected Result: true

2. isOdd(20)

   Expected Result: false

3. isOdd(10001)

   Expected Result: true

************/
console.log('Problem 3:')

// Add your code below this line

// odd number determiner
function isOdd(number) {
  if (number % 2 !== 0) {
    console.log("true")
  } else {
    console.log("false")
  }
}

// checking our work with the test cases
isOdd(3)
isOdd(20)
isOdd(10001)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Nucleotide Count

The genetic language of every living thing on the planet is DNA. DNA is a large molecule that is built from an extremely long sequence of individual elements called nucleotides. 4 types exist in DNA and these differ only slightly and can be represented as the following symbols: 'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' thymine.

Given a single stranded DNA string, compute how many times each nucleotide occurs in the string.

Create a function that accepts "dna" (string) and calculates how many times each nucleotide occurs in the string

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. nucleotideCount("GGGGGTAACCCGG")

   Expected Result: { 'A': 2, 'T': 1, 'C': 3, 'G': 7 }

2. nucleotideCount("'GGGGGGGG'")

   Expected Result: { 'A': 0, 'T': 0, 'C': 0, 'G': 8 }

3. nucleotideCount("CGATTGGG")

   Expected Result: { 'A': 1, 'T': 2, 'C': 1, 'G': 4 }

4. nucleotideCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")

   Expected Result: { 'A': 20, 'T': 21, 'C': 17, 'G': 12 }

************/
console.log('Problem 4:')

// Add your code below this line
function nucleotideCount(dnaStrand) {
  // breaking up string and creating placeholder array
  const letterArray = dnaStrand.split('')
  const letterCount = {}

  // logic for counting letters
  for (let i = 0; i < letterArray.length; i++) {
    letter = letterArray[i]
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1
    } else {
      letterCount[letter] += 1
    }
  }
return letterCount
}

// testing work with cases
console.log(nucleotideCount("GGGGGTAACCCGG"))
console.log(nucleotideCount("GGGGGGGG"))
console.log(nucleotideCount("CGATTGGG"))
console.log(nucleotideCount("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Wordy Math

Parse and evaluate simple math word problems returning the answer as an integer.

Create a function that accepts a "mathProblem" as a parameter and translate that word problem into an integer based math problems and returns an integer representing the answer

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordyMath("What is 5 plus 13?")

   Expected Result: 18

2. wordyMath("What is 7 minus 5?")

   Expected Result: 2

3. wordyMath("What is 6 multiplied by 4?")

   Expected Result: 24

4. wordyMath("What is 25 divided by 5?")

   Expected Result: 24 << shouldn't this be 5?

************/
console.log('Problem 5 (challenge):')

// Add your code below this line
function wordyMath (question) {
  // break up single string
  const wordArray = question.split(' ')

  // look for math sign and if present, do it and return
  if (wordArray.includes('multiplied')) {
    return parseFloat(wordArray[2]) * parseFloat(wordArray[5])
  } else if (wordArray.includes('divided')) {
    return parseFloat(wordArray[2]) / parseFloat(wordArray[5])
  } else if (wordArray.includes('plus')) {
    return parseFloat(wordArray[2]) + parseFloat(wordArray[4])
  } else if (wordArray.includes('minus')) {
    return parseFloat(wordArray[2]) - parseFloat(wordArray[4])
  } else {
    console.log('math sign not found')
  }
}

// testing work with cases
console.log(wordyMath("What is 5 plus 13?"))
console.log(wordyMath("What is 7 minus 5?"))
console.log(wordyMath("What is 6 multiplied by 4?"))
console.log(wordyMath("What is 25 divided by 5?"))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
