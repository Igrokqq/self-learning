class Observer {
  constructor() {
    this._subscribers = [];
  }

  subscribe(fn) {
    this._subscribers.push(fn);
  }

  unsubscribe(fn) {
    this._subscribers = this._subscribers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this._subscribers.forEach((subscriber) => subscriber(data));
  }
}

class EventObserverList {
  constructor() {
    this._observers = [];
  }

  add(observer) {
    this._observers.push(observer);
  }

  removeAt(index) {
    this._observers.splice(index, 1);
  }

  removeAll() {
    this._observers = [];
  }

  get(index) {
    return this._observers[index];
  }

  getAll() {
    return this._observers;
  }

  count() {
    return this._observers.length;
  }
}

class Subject {
  constructor() {
    this._observerList = new EventObserverList();
  }

  addObserver(observer) {
    return this._observerList.add(observer);
  }

  removeAllObservers() {
    this._observerList.removeAll();
  }

  notify(data) {
    const observers = this._observerList.getAll();

    observers.forEach((observer) => observer.broadcast(data));
  }
}

const subject = new Subject();

const observer1 = new Observer();

observer1.subscribe((name) => {
  console.log(`Hi, ${name}`);
});

subject.addObserver(observer1);

subject.notify('Tom');
