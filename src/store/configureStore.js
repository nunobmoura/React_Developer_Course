import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

// import { configureStore } from "@reduxjs/toolkit";
// import expensesReducer from "../reducers/expenses";
// import filtersReducer from "../reducers/filters";

// export default () => {
//   const reducer = {
//     expenses: expensesReducer,
//     filters: filtersReducer,
//   };

//   const store = configureStore({
//     reducer,
//   });
//   return store;
// };