import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

export default () => {
  const reducer = {
    expenses: expensesReducer,
    filters: filtersReducer,
  };

  const store = configureStore({
    reducer,
  });
  return store;
};
