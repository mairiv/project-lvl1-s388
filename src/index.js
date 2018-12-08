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
const printDescription = description => console.log(description);
const printQuestion = question => console.log(`Question: ${question}`);
const getAnswer = isNumber => readlineSync[isNumber ? 'questionInt' : 'question']('Your answer: ');
const congratsUser = name => console.log(`Congratulations, ${name}!`);

const gameProcess = (Class, name) => {
  const gameObj = new Class();
  printQuestion(gameObj.question);
  const answer = getAnswer(gameObj.isAnswerNumber);
  const result = gameObj.correctAnswer === answer;
  if (!result) {
    printMessageError(answer, gameObj.correctAnswer, name);
  } else {
    printMessageSuccess();
    countUserSuccesAnswer += 1;
    if (countUserSuccesAnswer < NUM_CORRECT_ANSWERS) {
      gameProcess(Class, name);
    } else {
      congratsUser(name);
    }
  }
};

const runGame = (gameObj) => {
  welcome();
  printDescription(gameObj.description);
  const userName = sayHelloUser();
  gameProcess(gameObj, userName);
};

export { welcome, sayHelloUser, runGame };
