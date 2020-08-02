class Singleton {
  constructor() {
    this._instance = null;
  }

  static _init() {
    const privateMethod1 = (n1, n2) => n1 + n2;

    return {
      publicMethod1: ({ name }) => {
        console.log('publicMethod1', name);
      },

      publicMethod2: (n) => {
        const result = privateMethod1(n, n);

        console.log('result of sum up', result);
      },
    };
  }

  getInstance() {
    if (!this._instance) {
      this._instance = Singleton._init();
    }

    return this._instance;
  }
}

const singleton = new Singleton();

const instance = singleton.getInstance();

console.log('instance', instance);

instance.publicMethod1({
  name: 'Rick',
});

instance.publicMethod2(2);
