const obj = {
  a: 1,
};

const clonedObj = Object.create(obj);

clonedObj.a += 1;

console.log('obj', obj.a); // a: 1
console.log('clonedObj', clonedObj.a); // a: 2
