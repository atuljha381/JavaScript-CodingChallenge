/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/


const markW = 95
const markH = 1.88
const johnW = 85
const johnH = 1.76

const bmiMark = markW/markH **2
const bmiJohn = johnW / (johnH*johnH)

console.log("BMI of Mark",bmiMark);
console.log("BMI of John",bmiJohn);

if(bmiMark>bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
}
else{
    console.log(`Mark's BMI (${bmiMark}) is lower than John's (${bmiJohn})`)
}

console.log('23'-'10');