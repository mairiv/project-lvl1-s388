import { initNum } from '../utils';
import { runGame } from '..';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;
const description = 'Answer "yes" if number even otherwise answer "no".';
const isAnswerNumber = false;

const init = () => {
  const question = initNum(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runBrainEven = () => runGame(description, init, isAnswerNumber);

export default runBrainEven;
