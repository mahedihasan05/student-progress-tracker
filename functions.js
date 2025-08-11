import students from "./data.js";
let id = students.length + 1;
let updateStudents = [...students];


// mainMenu() function
export function mainMenu(){
    // Main menu function which displays all functions
    console.log(
`1/addStudent()
2/calculateAverage()
3/getTopPerformers()
4/getAllAverages()
5/updateScore()
6/getSummary()
7/printAllStudents()`
    );
}


// addStudent(name, scores) function
export const addStudent = (name, scores) => {
    // What it does: Adds a new student and shows confirmation.
  const newStudent = {
    id: id++,
    name: name,
    scores: scores,
  }
  console.log(`${name} has been added with ID ${id -1}`);
  updateStudents = [...updateStudents, newStudent];
  printAllStudents();
}

// calculateAverage(studentId) function
export function calculateAverage(studentId) {
    // What it does: Find a student by ID and return their average score with a nice message.
    const student = students.find(student => student.id === studentId);
    const sum = student.scores.reduce((total, score) => total + score, 0);
    const average = sum / student.scores.length;
    console.log(`${student.name}'s average score is ${average.toFixed(2)}`);
}

// getAllAverages() function
export function getAllAverages(){
    // What it does: Shows every student's average score.
    console.log("All Student's Averages:")
    for(const student of updateStudents){
        const sum = student.scores.reduce((total, score) => total + score, 0);
        const average = sum / student.scores.length;
        console.log(`${student.name}: ${average.toFixed(2)}`);
    }
}


// getTopPerformers() function
export function getTopPerformers(){
    // What it does: Shows students with average score 80 or above. 
    console.log("Top Performers (80+ average):");
     for(const student of updateStudents){
        const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
        if (average > 80) {
            console.log(`${student.name} (ID:${student.id}) - Average: ${average.toFixed(2)}`);
        }
    }
}

// getSummary() function
export function getSummary(){
    // What it does: Shows overall class statistics.
    console.log("Class Summary:");
    const totalStudents = updateStudents.length;
    console.log("Total Students:", totalStudents);
    const totalScores = updateStudents.reduce((acc, student) => {
        return acc + student.scores.reduce((sum, score) => sum + score, 0);
    }, 0);
    const averageScore = totalScores / (totalStudents * 3); // Assuming 3 subjects
    console.log(`Overall Average: ${averageScore.toFixed(2)}`);
    const highestAverage = Math.max(...updateStudents.map(student => {
        const sum = student.scores.reduce((total, score) => total + score, 0);
        return sum / student.scores.length;
    }));
    console.log(`Highest Average: ${highestAverage.toFixed(2)} (${updateStudents.find(student => {
        const sum = student.scores.reduce((total, score) => total + score, 0);
        return sum / student.scores.length === highestAverage;
    }).name})`);
    const lowestAverage = Math.min(...updateStudents.map(student => {
        const sum = student.scores.reduce((total, score) => total + score, 0);
        return sum / student.scores.length;
    }));
    console.log(`Lowest Average: ${lowestAverage.toFixed(2)} (${updateStudents.find(student => {
        const sum = student.scores.reduce((total, score) => total + score, 0);
        return sum / student.scores.length === lowestAverage;
    }).name})`);
}

// updateScore(studentId, scoreIndex, newScore)
export function updateScore(studentId, scoreIndex, newScore){
    // What it does: Updates a specific test score for a student.
    const student = updateStudents.find(student => student.id === studentId);
    if (student) {
        student.scores[scoreIndex] = newScore;
        console.log(`${student.name}'s score updated. New scores: [${student.scores}]`);
    } else {
        console.log(`Student with ID ${studentId} not found.`);
    }
    console.log("Updated student list:", [student]);
    console.log("Other students remain unchanged");
}

// printAllStudents() function
export function printAllStudents(){
    // What it does: Shows all students with their scores.
    console.log("All Students:");
    for(const student of updateStudents){
        console.log(`${student.name} (ID:${student.id}) - Scores: [${student.scores}]`);
    }
}
