import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', createdAt: 1662030000000, amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1662030000000, amount: 200 }));
store.dispatch(addExpense({ description: 'Rent', createdAt: 1662030000000, amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
