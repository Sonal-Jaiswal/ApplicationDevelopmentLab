
// task1
let rollNo = prompt("Enter your roll number:");
let name = prompt("Enter your name:");
let section = prompt("Enter your section:");

console.log("Roll Number:", rollNo);
console.log("Name:", name);
console.log("Section:", section);


// task2
let marks = parseFloat(prompt("Enter your marks:"));
function getGrade(mark) {
    if(mark>=90){
        return "O";
    }
    else if (mark >=80){
        return "E";
    }
    else if (mark>=70){
        return "A";
    }
    else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else {
        return "F";}
}

console.log(`Grade: ${getGrade(marks)}`)



// task3
let total = 0;

for (let i = 1; i <= 10; i++) {
    let number = parseFloat(prompt(`Enter number ${i}:`));
    total += number;
}

let average = total / 10;
console.log("Average:", average);


