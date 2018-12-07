import readlineSync from 'readline-sync';
import { initNum } from '../utils';

const even = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  gameIteration: () => {
    const currentNum = initNum();
    console.log(`Question: ${currentNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = currentNum % 2 === 0 ? 'yes' : 'no';
    const result = answer === correctAnswer;
    return { result, answer, correctAnswer };
  },

};

export default even;
