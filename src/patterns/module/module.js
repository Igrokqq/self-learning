const Module1 = function () {
  const privateMethod1 = (n1, n2) => n1 + n2;

  return {
    publicMethod1: (n) => privateMethod1(n, n),
  };
};

const module1 = new Module1();

const result = module1.publicMethod1(2);

console.log('result', result);
