class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.observers.forEach((fn) => fn(data));
  }
}

const observer = new EventObserver();

const fn1 = (name) => {
  console.log(`${name}, Hey!`);
};

observer.subscribe(fn1);

const fn2 = (name) => {
  console.log(`${name}, Bye!`);
};

observer.subscribe(fn2);

observer.unsubscribe(fn2);

observer.broadcast('Tom');
