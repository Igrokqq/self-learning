function Module1() {
  const sum = (n1, n2) => n1 + n2;
  const multiple = (n1, n2) => n1 * n2;

  return {
    facade(n1, n2) {
      const summed = sum(n1, n2);
      const multipliedNums = multiple(n1, n2);

      return sum(summed, multipliedNums);
    },
  };
};

const module1 = new Module1();

const result = module1.facade(1, 2);

console.log('result', result);
