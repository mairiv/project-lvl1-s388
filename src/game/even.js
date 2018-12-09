import { randomNum } from '../utils';
import { runGame } from '..';

const minNumber = 0;
const maxNumber = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';

const init = () => {
  const question = randomNum(minNumber, maxNumber);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runBrainEven = () => runGame(description, init);

export default runBrainEven;
