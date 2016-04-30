// reducer
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// import store
const {createStore} = Redux;

// create store
const store = createStore(counter);

// render function which add current state to the DOM
const render = () => {
  document.body.innerText = store.getState();
};

// subscribe render function
store.subscribe(render);

render();

// when dispacth gets called, subscribe method will get called because the state in the store will change
document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
