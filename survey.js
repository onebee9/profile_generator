const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questions = [
  `What\'s your name? Nicknames are also acceptable :)`,
  'What\'s an activity you like doing? ',
  'What do you listen to while doing that?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
];


rl.question(questions[0], (answer) => {
  console.log(answer);
  rl.question(questions[1], (answer) => {
    console.log(answer);
    rl.question(questions[2],(answer)=>{
      console.log(answer);
      rl.question(questions[3],(answer)=>{
        console.log(answer);
      });
    });
  });
});
