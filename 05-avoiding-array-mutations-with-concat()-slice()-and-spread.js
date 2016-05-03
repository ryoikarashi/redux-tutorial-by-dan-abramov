const addCounter = (list) => {

/* 1 - this push method will mutate the original array, so it doesn't work with DeepFreeze

  list.push(0);
  return list;

*/

/* 2 - avoid mutations by creating a whole new array using concat method

  return list.concat([0]);

*/

/* 3 - use ES6 array spread operator instead of using concat method which is much better */
  return [...list, 0];
};

const removeCounter = (list, index) => {
/* 1 - splice is mutating the original array
  list.splice(index, 1);
  return list;
*/

/* 2 - avoid mutations by creating a whole new array using slice and concat
  return list
    .slice(0, index)
    .concat(list.slice(index + 1));
*/

/* 3 - use ES6 array spread operator instead of using concat which looks much nicer */
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];

};

const incrementCounter = (list, index) => {

/* 1 - incrementing a specific number in the original array is mutating
  list[index]++;
  return list;
*/

/* 2 - avoid mutations by creating a whole new array using slice and concat
  return list
    .slice(0, index)
    .concat(list[index] + 1)
    .concat(list.slice(index + 1));
*/

/* 3 - use ES6 array spread operator instead of using concat */
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};


const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');
