import readlineSync from 'readline-sync';
import { initNum, randomBoolean } from '../utils';

const calc = {
  rules: 'What is the result of the expression?',
  getExrpession: (flag, a, b) => {
    if (flag) {
      return a + b;
    }
    return a * b;
  },
  getExrpessionToString: (flag, a, b) => {
    if (flag) {
      return `${a} + ${b}`;
    }
    return `${a} * ${b}`;
  },
  gameIteration: () => {
    const numFirst = initNum();
    const numSecond = initNum();
    const isAddition = randomBoolean();
    console.log(`Question: ${calc.getExrpessionToString(isAddition, numFirst, numSecond)}`);
    const answer = readlineSync.questionInt('Your answer: ');
    const correctAnswer = calc.getExrpession(isAddition, numFirst, numSecond);
    const result = answer === correctAnswer;
    return { result, answer, correctAnswer };
  },

};

export default calc;
