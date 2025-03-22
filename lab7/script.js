
// Task 1: Student records
const students = [
    { rollno: 1, name: "Sonal", marks: 85 },
    { rollno: 2, name: "Shreya", marks: 78 },
    { rollno: 3, name: "Sierra", marks: 92 },
    { rollno: 4, name: "simran", marks: 65 },
    { rollno: 5, name: "Mr. Stark", marks: 89 },
    { rollno: 6, name: "Vivek", marks: 73 },
    { rollno: 7, name: "Bhumika Ravariya", marks: 95 },
    { rollno: 8, name: "Swayam", marks: 80 },
    { rollno: 9, name: "Ash", marks: 67 },
    { rollno: 10, name: "Joy", marks: 88 }
];


function findHighestMarkStudent() {
    return students.reduce((max, student) => (student.marks > max.marks ? student : max), students[0]);
}


function findLowestMarkStudent() {
    return students.reduce((min, student) => (student.marks < min.marks ? student : min), students[0]);
}

function calculateAverageMarks() {
    const total = students.reduce((sum, student) => sum + student.marks, 0);
    return total / students.length;
}


console.log("Student with highest marks:", findHighestMarkStudent());
console.log("Student with lowest marks:", findLowestMarkStudent());
console.log("Average marks:", calculateAverageMarks().toFixed(2));




// Task 2: User Authentication
const users = {
    "user1": "pass123",
    "user2": "qwerty",
    "user3": "letmein",
    "user4": "abc123",
    "user5": "securepass"
};


function validatePassword(username, password) {
    if (users.hasOwnProperty(username)) {
        return users[username] === password ? "Login successful!" : "Invalid password!";
    }
    return "User not found!";
}

function validateUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const result = validatePassword(username, password);
    
    
    document.getElementById("result").innerText = result;

    console.log(`Username: ${username}, Password: ${password}`);
    console.log("Result:", result);
}


function testConsoleValidation() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
    const result = validatePassword(username, password);
    
    console.log(`Username: ${username}, Password: ${password}`);
    console.log("Result:", result);
}


// testConsoleValidation(); 