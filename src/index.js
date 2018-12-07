import readlineSync from 'readline-sync';

const NUM_CORRECT_ANSWERS = 3;
let countUserSuccesAnswer = 0;


const welcome = () => console.log('Welcome to the Brain Games!');

const sayHelloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printMessageSuccess = () => console.log('Correct!');
const printMessageError = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`);
};
const printRule = rules => console.log(rules);
const congratsUser = name => console.log(`Congratulations, ${name}!`);


const gameProcess = (gameIteration, name) => {
  const { result, answer, correctAnswer } = gameIteration();
  if (!result) {
    printMessageError(answer, correctAnswer, name);
  } else {
    printMessageSuccess();
    countUserSuccesAnswer += 1;
    if (countUserSuccesAnswer < NUM_CORRECT_ANSWERS) {
      gameProcess(gameIteration, name);
    } else {
      congratsUser(name);
    }
  }
};


const runGame = (gameObj) => {
  welcome();
  printRule(gameObj.rules);
  const userName = sayHelloUser();
  gameProcess(gameObj.gameIteration, userName);
};

export { welcome, sayHelloUser, runGame };
