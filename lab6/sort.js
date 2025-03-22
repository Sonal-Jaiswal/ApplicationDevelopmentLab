function sortNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                // Swap numbers[i] and numbers[j]
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

let count = parseInt(prompt("How many numbers do you want to sort?"));
let numbers = [];

for (let i = 0; i < count; i++) {
    numbers.push(parseFloat(prompt(`Enter number ${i + 1}:`)));
}

let sortedNumbers = sortNumbers(numbers);
console.log("Sorted Numbers:", sortedNumbers);
