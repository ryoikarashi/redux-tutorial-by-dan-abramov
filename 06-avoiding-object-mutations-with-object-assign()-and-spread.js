const toggleTodo = (todo) => {
/* 1 - modifying the original object is mutating, so it doesn't work with deepFreeze

  todo.completed = !todo.completed;
  return todo;
*/

/* 2 - avoid mutating by creating a whole new object.
  However if you later add new properties, you might forget to update pieces of code to include them.
  So this is not recommended.

  return {
    id: todo.id,
    text: todo.text,
    completed: !todo.completed
  };
*/


/* 3 - use ES6 Object.assign method instead of writing a new method from scratch
  Object.assign (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  This is not natively supported so you need a polyfill to make it work in older browsers

  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};
*/

/* 4 - another options that doesn't need a polyfill is to use a new object spread operator which is propsed for ES7. You need to have stage2 preset of babel */
return {
  ...todo,
  completed: !todo.completed
};


const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('all tests passed');
