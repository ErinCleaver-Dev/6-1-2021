let numbers = [54, 26, 93, 17, 77, 31, 44, 55, 20];
const sortNumbers = (numbers) => {
    let tempNumbers = numbers[0];
  for(let i = 0; i < numbers.length; i++) {
    for(let j = 0; j <numbers.length; j++) {
      if(numbers[i] < numbers[j]) {
        tempNumbers = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = tempNumbers;
      }
    }
  }
  return numbers;
}

let numbers2 = [5, 7, 1, 8, 12]

// accepts an array of numbers
const bubbleShort = (numbers) => {
    // temp for numbers
    let tempNumbers = 0;
    // enters the first forloop
  for(let i = 0; i < numbers.length; i++) {
        // enters the secound for loop
    for(let j = 0; j <numbers.length; j++) {
      if(numbers[j] > numbers[j+1]) {
        //console.log(`${numbers[j]} is greater then ${numbers[j+1]}`)
        tempNumbers = numbers[j+1]
        numbers[j+1] = numbers[j]
        numbers[j] = tempNumbers;
      }
    }
  }
  return numbers;
}

numbers = bubbleShort(numbers)
numbers = sortNumbers(numbers);
console.log(numbers)
console.log(numbers)
console.log(numbers)