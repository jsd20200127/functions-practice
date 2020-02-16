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

function isEquilateral(s1,s2,s3) {
	if ((s1===s2) && (s1===s3)) {
		return true
	} else {
		return false	
	}
}

function isIsoceles(s1,s2,s3) {
	if ((s1===s2) || (s1===s3) || (s2===s3)) {
		return true
	} else {
		return false
	}
}

function typeOfTriangle(s1,s2,s3) {
	if ((s1<=0) || (s2<=0) || (s3<=0)) {
		return "Not a triangle!"
	} else if (((s1+s2)<=s3) || ((s2+s3)<=s1) || ((s3+s1)<=s2)) {
		return "Not a triangle!"
	} else {	
		if (isEquilateral(s1,s2,s3)) {
			return "Equilateral!"
		} else if (isIsoceles(s1,s2,s3)) {
			return "Isoceles!"
		} else {
			return "Scalene!"
		}		
	}
}

console.log(typeOfTriangle(2, 9, 7))

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

function randomNumber(max) {
	return Math.floor(Math.random() * max)
}

console.log(randomNumber(1500))

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

function isOdd(number) {
	return (number % 2 === 0) ? true : false
}

console.log(isOdd(20))

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

dna_string = "CGATTGGG"

function count_nucleotide(string) {
	let a_count = 0
	let t_count = 0
	let c_count = 0
	let g_count = 0

	for (i=0; i<string.length; i++ ) {
		switch (string.charAt(i)) {
		case "A": 
			a_count++;
			break;
		case 'T':
			t_count++;
			break;
		case 'C':
			c_count++;
			break;
		case 'G':
			g_count++;
			break;
		default:
			break;
		}
	}

	return ('A:' + a_count + ', T:' + t_count + ', C:' + c_count + ', G:' + g_count)
}

console.log(count_nucleotide(dna_string))

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

   Expected Result: 5

************/
console.log('Problem 5 (challenge):')

// Add your code below this line

let input = "What is 5 plus 13?"

function findNumbersInString(string) {
	// let numbers = []
	// let words = string.split(" ")
	// for (i=0; i<words.length; i++) {
	// 	if (!isNaN(words[i])) {
	// 		numbers.push(words[i])
	// 	} 
	// }
	let numbers = string.match(/\d+/g)
	console.log(numbers)
	return numbers
}

function wordyMath(string) {
	numbers = findNumbersInString(string)
	if (numbers.length > 2) {
		return 'Out of scope.'
	} else {
		if (string.includes("plus")) {
			return (parseInt(numbers[0]) + parseInt(numbers[1]))
		} else if (string.includes("minus")) {
			return (numbers[0] - numbers[1])
		} else if (string.includes("multiplied by")) {
			return (numbers[0] * numbers[1])
		} else if (string.includes("divided by")) {
			return (numbers[0] / numbers[1])
		} else {
			return 'Out of scope.'
		}
	}
}

console.log(wordyMath(input))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
