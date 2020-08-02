class EventEmitter {
  constructor() {
    this._events = {};
  }

  on(eventName, callback) {
    if (this._events[eventName]) {
      this._events[eventName].push(callback);

      return;
    }

    this._events[eventName] = [callback];
  }

  emit(eventName, data) {
    if (!this._events[eventName]) {
      throw new Error('Event does not exist');
    }

    this._events[eventName].forEach((callback) => callback(data));
  }
}

const eventEmitter = new EventEmitter();

eventEmitter.on('Welcome', (name) => console.log(`Welcome, ${name}`));

eventEmitter.emit('Welcome', 'Tom');
