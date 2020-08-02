const obj = {
  a: 1,
};

const clonedObj = Object.create(obj, {
  a: {
    readable: false,
  },
});

clonedObj.a += 1;

console.log('obj', obj.a); // a: 1
console.log('clonedObj', clonedObj.a); // undefined
