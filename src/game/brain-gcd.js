import { initNum, randomBoolean } from '../utils';
import { runGame } from '..';

class Gcd {
  constructor() {
    this.numFirst = initNum();
    this.numSecond = initNum();
    this.isAddition = randomBoolean();
    this.description = 'Find the greatest common divisor of given numbers.';
    this.isAnswerNumber = true;
    this.correctAnswer = this.getCorrectAnswer();
    this.question = `${this.numFirst} ${this.numSecond}`;
  }

  getCorrectAnswer() {
    let a = this.numFirst > this.numSecond ? this.numFirst : this.numSecond;
    let b = this.numFirst > this.numSecond ? this.numSecond : this.numFirst;
    let c = a % b;
    while (c !== 0) {
      a = b;
      b = c;
      c = a % b;
    }
    return b;
  }
}

const runBrainGcd = () => runGame(Gcd);
export default runBrainGcd;
