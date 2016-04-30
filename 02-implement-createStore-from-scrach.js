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

// create createStore provided by Redux from scrach
const createStore = (reducer) => {
  // state
  let state;
  // keep track of all listners
  let listeners = [];

  // getState just returns current state
  const getState = () => state;

  // dispatch in an action is the only way to change the internal state
  const dispatch = (action) => {
    // change the state according to its action
    state = reducer(state, action);
    // after the state is updated, we need to notify every listener by calling it
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    // any times it is called, push new listener into the array
    listeners.push(listener);

    // unsubscribe
    // return function that removes this listener from this listeners array
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // call dispatch once in order to get reducer to return the initial value
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

// create store
const store = createStore(counter);

// render function which add current state to the DOM
const render = () => {
  document.body.innerText = store.getState();
};

// subscribe listeners
store.subscribe(render);

render();

document.addEventListener('click', () => {
  // when dispacth gets called, listeners subscribed in subscribe methods will call
  store.dispatch({type: 'INCREMENT'});
});
