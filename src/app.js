import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Water bill', note: 'Pay by Friday', amount: 120}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', note: 'pay asap', amount: 150, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', note: 'pay asap', amount: 270150}));
const expenseFour = store.dispatch(addExpense({description: 'Car Bill', note: 'pay asap', amount: 47000}));
const expenseFive = store.dispatch(addExpense({description: 'Insurance', note: 'pay asap', amount: 23900}));
store.dispatch(setTextFilter('water'));
// store.dispatch(setTextFilter('bill'));


setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000)

    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
