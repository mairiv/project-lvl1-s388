import { randomNum, randomBoolean } from '../utils';
import { runGame } from '..';

const minNumber = 0;
const maxNumber = 100;
const actions = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getExrpession = (action, first, second) => {
  let expression;
  switch (action) {
    case '+':
      expression = first + second;
      break;
    case '-':
      expression = first - second;
      break;
    case '*':
      expression = first * second;
      break;
    default:
      break;
  }
  return expression;
};

const init = () => {
  const numFirst = randomNum(minNumber, maxNumber);
  const numSecond = randomNum(minNumber, maxNumber);
  const action = actions[randomNum(0, actions.length - 1)];
  const correctAnswer = String(getExrpession(action, numFirst, numSecond));
  const question = `${numFirst} ${action} ${numSecond}`;
  return { question, correctAnswer };
};

const runBrainCalc = () => runGame(description, init);

export default runBrainCalc;
