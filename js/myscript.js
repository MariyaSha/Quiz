/*
- Ask at least five questions
- Keep track of the number of questions the user answered correctly
-Provide a final message after the quiz letting the user know the number of questions he or she got right.
-Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.
*/

//Starting point - all questions are false, until otherwise proven, 0 correct answers at this point
var correctAnswers = 0;
var quest1 = false;
var quest2 = false;
var quest3 = false;
var quest4 = false;
var quest5 = false;
/*After watching teachers explenation: the top 5 lines are not required, only the var correctAnswers = 0; is needed here*/

//Question #1
quest1 = prompt("Who is the author of 'Hunger Games' series?");
if (quest1.toLowerCase() === "suzanne collins" || quest1.toLowerCase() === "collins" || quest1.toLowerCase() === "s. collins") {
    correctAnswers += 1;
    quest1 = true;
    console.log("Question #1 is correct");
} else {
    console.log("Question #1 is wrong");
}
/*After watching teachers explenation: line 21 in not needed, console.log is just something I've added to test the program, same with the following statements(line 32, 42, 52, 62)*/


//Question #2
quest2 = prompt("Where was 'The Lord of the Rings' series filmed?");
if ( quest2.toLowerCase() === "new zealand" || quest2.toLowerCase() === "nz"){
    quest2 = true;
    console.log("Question #2 is correct");
    correctAnswers += 1;
} else {
    console.log("Question #2 is wrong");
}

//Question #3
quest3 = prompt("In what year 'World War Two' begun?");
if ( quest3.toLowerCase() === "1939" || quest3.toLowerCase() === "39" || quest3.toLowerCase() === "nineteen thirty nine" || quest3.toLowerCase() === "one thousand nine hundred thirty nine" || quest3.toLowerCase() === "one thousand nine hundred and thirty nine"){
    quest3 = true;
    console.log("Question #3 is correct");
    correctAnswers += 1;
} else {
    console.log("Question #3 is wrong");
}

//Question #4
quest4 = prompt("What is the capital city of Israel?");
if ( quest4.toLowerCase() === "jerusalem"){
    quest4 = true;
    console.log("Question #4 is correct");
    correctAnswers += 1;
} else {
    console.log("Question #4 is wrong");
}

//Question #5
quest5 = prompt("How many months are 4 years?");
if ( quest5.toLowerCase() === "48" || quest3.toLowerCase() === "forty eight" || quest3.toLowerCase() === "fourty-eight"){
    quest5 = true;
    console.log("Question #5 is correct");
    correctAnswers += 1;
} else {
    console.log("Question #5 is wrong");
}

//Results, counting the number of correct answers
if(correctAnswers === 5){
    document.write("<h1>Congradulations! You have won the gold crown!</h1><p><img src='goldCrown.png'></p>");
} else if ( correctAnswers <= 4 && correctAnswers >= 3 ){
    document.write("<h1>Congradulations! You have won the silver crown!</h1><p><img src='silverCrown.png'></p>");
} else if (correctAnswers <= 2 && correctAnswers >= 1){
    document.write("<h1>Congradulations! You have won the bronze crown!</h1><p><img src='bronzeCrown.png'></p>");
} else {
    document.write("<h1>Oh no, you have lost, better luck next time!</h1>");
}

/*After watching teachers explenation: the && operator is not needed, as if the correct answer number is NOT 5 - only then the "else if" will be running. if correctAnswers === 5, the rest of the code will NOT RUN ANYWAY. therefore the next statements would be (correctAnswers >= 3) and (correctAnswers >= 1)*/

document.write("<h2>You have answered " + correctAnswers + " questions correctly.</h2>");

