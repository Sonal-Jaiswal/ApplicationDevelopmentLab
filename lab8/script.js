// Made by: Sonal Jaiswal
// Date: 2025-02-01

// // Task 1: Palindrome Checker
// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false

// Task 1: Palindrome Checker
function isPalindrome() {
    let str = prompt("Enter a string to check if it's a palindrome:");
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        alert("It's a palindrome!");
        console.log("It's a palindrome!");
    } else {
        alert("It's not a palindrome.");
        console.log("It's not a palindrome.");
    }
}
// isPalindrome();


// // Task 2: Find the number of occurrences of a character in a string
// function countOccurrences(str, char) {
//     return str.split(char).length - 1;
// }

// console.log(countOccurrences("hello world", "o")); // 2

function countOccurrences() {
    let str = prompt("Enter a string:");
    let char = prompt("Enter a character to count its occurrences:");
    let count = str.split(char).length - 1;
    alert(`The character '${char}' appears ${count} times in the string.`);
    console.log(`The character '${char}' appears ${count} times in the string.`);}
// countOccurrences();





// Task 3: Open a new identical window and close the original window
function openAndCloseWindow() {
    let newWin = window.open(window.location.href, "_blank");
    console.log("New window opened");
    if (newWin) {
        window.close();
    } else {
        
    }
}

// Task 4: Open another page on clicking a button
function openPage() {
    window.open("https://gfgkiit.in/", "_blank"); 
    console.log("Navigating to GFG KIIT Chapter ");
}


// Task 5: Take two numbers from the user and display the greater one
function findGreater() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (num1 > num2) {
        alert(`${num1} is greater`);
    } else if (num2 > num1) {
        alert(`${num2} is greater`);
    } else {
        alert("Both numbers are equal");
    }
}
