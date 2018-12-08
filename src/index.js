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

const gameProcess = (init, isAnswerNumber, name) => {
  const { question, correctAnswer } = init();
  printQuestion(question);
  const answer = getAnswer(isAnswerNumber);
  const result = correctAnswer === answer;
  if (!result) {
    printMessageError(answer, correctAnswer, name);
  } else {
    printMessageSuccess();
    countUserSuccesAnswer += 1;
    if (countUserSuccesAnswer < NUM_CORRECT_ANSWERS) {
      gameProcess(init, isAnswerNumber, name);
    } else {
      congratsUser(name);
    }
  }
};

const runGame = (description, init, isAnswerNumber) => {
  welcome();
  printDescription(description);
  const userName = sayHelloUser();
  gameProcess(init, isAnswerNumber, userName);
};

export { welcome, sayHelloUser, runGame };
