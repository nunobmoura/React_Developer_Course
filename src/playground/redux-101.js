import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ setTo }) => ({
  type: 'SET',
  setTo
});
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
      case "SET":
        return {
          count: action.setTo,
        };
    default:
      return state;
  }
}
const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 10}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ setTo: 100 }));

store.dispatch(decrementCount({ decrementBy: 5}));

store.dispatch(decrementCount());



// store.dispatch({
//   type: "DECREMENT",
// });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 5,
// });

// console.log(store.getState());
