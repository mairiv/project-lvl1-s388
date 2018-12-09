import readlineSync from 'readline-sync';

const numCorrectAnswers = 3;

const sayHelloUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('game list:');
  console.log('brain-calc, brain-even, brain-progression, brain-gcd, brain-prime');
};

const gameProcess = (init, name, round = 0) => {
  let roundCount = round;
  if (roundCount === numCorrectAnswers) {
    return true;
  }
  const { question, correctAnswer } = init();
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const result = correctAnswer === answer;
  if (result) {
    console.log('Correct!');
    roundCount += 1;
    return gameProcess(init, name, roundCount);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const runGame = (description, init) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const isWin = gameProcess(init, userName);
  console.log(isWin ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};

export { sayHelloUser, runGame };
