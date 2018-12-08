import { initNum, randomBoolean } from '../utils';
import { runGame } from '..';

class Calc {
  constructor() {
    this.numFirst = initNum();
    this.numSecond = initNum();
    this.isAddition = randomBoolean();
    this.description = 'What is the result of the expression?';
    this.isNumber = true;
    this.correctAnswer = this.getExrpession();
    this.question = this.getExrpessionToString();
  }

  getExrpession() {
    if (this.isAddition) {
      return this.numFirst + this.numSecond;
    }
    return this.numFirst * this.numSecond;
  }

  getExrpessionToString() {
    if (this.isAddition) {
      return `${this.numFirst} + ${this.numSecond}`;
    }
    return `${this.numFirst} * ${this.numSecond}`;
  }
}

const runBrainCalc = () => runGame(Calc);
export default runBrainCalc;
