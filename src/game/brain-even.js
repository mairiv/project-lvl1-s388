import { initNum } from '../utils';
import { runGame } from '..';

class Even {
  constructor() {
    this.description = 'Answer "yes" if number even otherwise answer "no".';
    this.question = initNum();
    this.correctAnswer = this.question % 2 === 0 ? 'yes' : 'no';
    this.isAnswerNumber = false;
  }
}

const runBrainEven = () => runGame(Even);
export default runBrainEven;
