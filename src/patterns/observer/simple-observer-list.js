class Observer {
  constructor() {
    this._state = null;
  }

  update(state) {
    this._state = state;
  }
}

class ObserverList {
  constructor() {
    this._observers = [];
  }

  add(observer) {
    this._observers.push(observer);
  }

  removeAt(index) {
    this._observers.splice(index, 1);
  }

  get(index) {
    return this._observers[index];
  }

  getAll() {
    return this._observers;
  }
}

class Subject {
  constructor() {
    this._observerList = new ObserverList();
  }

  addObserver(observer) {
    this._observerList.add(observer);
  }

  getObservers() {
    return this._observerList.getAll();
  }

  notify(data) {
    if (!data) {
      throw new Error('Please, pass data to notify...');
    }

    const observers = this._observerList.getAll();

    if (observers.length === 0) {
      throw new Error('Observers length is equal to 0');
    }

    observers.forEach((observer) => observer.update(data));
  }
}

const subject = new Subject();

subject.addObserver(new Observer());
subject.addObserver(new Observer());

subject.notify('Tom');

console.log(subject.getObservers());
