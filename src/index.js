import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const sayHelloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const showRuleBrainEven = () => console.log('Answer "yes" if number even otherwise answer "no".');

const initNum = () => {
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;
  return Math.floor(MIN_NUMBER + Math.random() * (MAX_NUMBER + 1 - MIN_NUMBER));
};


const NUM_CORRECT_ANSWERS = 3;
let countUserSuccesAnswer = 0;

const gameIteration = (name) => {
  const currentNum = initNum();
  console.log(`Question: ${currentNum}`);

  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = currentNum % 2 === 0 ? 'yes' : 'no';
  const result = answer === correctAnswer;
  const messageSussec = 'Correct!';
  const messageError = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${name}!`;
  if (!result) {
    console.log(messageError);
  } else {
    console.log(messageSussec);
    countUserSuccesAnswer += 1;

    if (countUserSuccesAnswer < NUM_CORRECT_ANSWERS) {
      gameIteration(name);
    } else {
      console.log(`Congratulations, ${name}!`);
    }
  }
};


const brainEven = () => {
  welcome();
  showRuleBrainEven();
  const userName = sayHelloUser();
  gameIteration(userName);
};
export { welcome, sayHelloUser, brainEven };
