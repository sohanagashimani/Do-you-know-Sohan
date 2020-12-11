var readlinesync = require("readline-sync")
const chalk = require('chalk');
const log = console.log;
log(chalk.blue('Hello There'))
var username = readlinesync.question(chalk.yellow("What is your name? "));
console.log(chalk.blue(("Hey ")+ chalk.whiteBright(username) + ( ' Welcome To "DO YOU KNOW SOHAN" quiz!!!')));
var score = 0;
console.log()
function play(question,answer){
  var useranswer = readlinesync.question(chalk.cyanBright(question))
  if(useranswer == answer){
    console.log(chalk.greenBright("Right!"));
    score+=1
  }else{
    console.log(chalk.redBright("Wrong!"))
  }
   console.log("current score", score);
    console.log("-------------------------------------")
}

var questions = [{
  question: "When is Sohan's Birthday? ",
  answer: "25th may"
},{
  question: "Where does Sohan live? ",
  answer: "Belgaum"
},{
  question: "Which school did Sohan study in? ",
  answer: "St Mary's High School"
},{
  question: "What is Sohan's brother's name? ",
  answer: "Darshan"
},{
  question: "In which std did Sohan give his first speech?(Ans in digit) ",
  answer: "5"
},{
  question: "Which is Sohan's favorite IPL team? ",
  answer: "Mumbai Indians"
},{
  question: "Where does Sohan like to go the most to enjoy(Hint:city)? ",
  answer: "GOA"
},{
  question: "Sohan's favourite food item(hint:snack)? ",
  answer: "Vada pav"
},{
  question: "What was the name of Sohan's favourite dog? ",
  answer: "Tommy"
},{
  question: "Which is Sohan's fav game? ",
  answer: "CSGO"
}]
//loop
for(var i = 0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)

}
console.log(chalk.greenBright("YaY! your score is: ",score))
