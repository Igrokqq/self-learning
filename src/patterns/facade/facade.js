class MathOperations {
  static sum(n1, n2) {
    return n1 + n2;
  }

  static multiple(n1, n2) {
    return n1 * n2;
  }
}

class Facade {
  constructor(n1, n2) {
    const sum = MathOperations.sum(n1, n2);
    const multipliedNums = MathOperations.multiple(n1, n2);

    this._result = MathOperations.sum(sum, multipliedNums);
  }

  get result() {
    return this._result;
  }
}

const facade = new Facade(1, 2);

console.log('facade result', facade.result);
