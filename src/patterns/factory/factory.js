class AudiCar {
  constructor() {
    this._name = 'audi';
  }

  get name() {
    return this._name;
  }
}

class BmwCar {
  constructor() {
    this._name = 'bmw';
  }

  get name() {
    return this._name;
  }
}

class TeslaCar {
  constructor() {
    this._name = 'tesla';
  }

  get name() {
    return this._name;
  }
}

class Car {
  constructor(type) {
    let _instance = null;

    switch (type) {
    case 'audi':
      _instance = new AudiCar();
      break;
    case 'tesla':
      _instance = new TeslaCar();
      break;
    default:
      _instance = new BmwCar();
      break;
    }

    return _instance;
  }
}

const car1 = new Car(); // { _name: 'bmw' }

console.log('car1', car1);

const car2 = new Car('audi'); // { _name: 'audi' }

console.log('car2', car2);
