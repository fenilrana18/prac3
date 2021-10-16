const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
const fs=require("fs");


var inst=()=>{
    console.log("\nThere will be 10 questions");
    console.log("\n+5 points for correct answer and -2 for wrong answer");
};
var start=()=>{
rl.question("Please enter name :",function(answer){
    console.log("Hello "+answer);
    rl.close();
});

};

var repeat=()=>{
    inst();
    start();
};
console.log("\nWelcome to quiz");
repeat();