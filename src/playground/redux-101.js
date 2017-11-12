import { createStore } from 'redux';

//Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy 
});

const decrementCount = ({ decrementBy = -1}  = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const setReset = ({ } = {}) => ({
    type: 'RESET',
   
})

//reducer
//1. Reducers are pure functions
//pure functions do not interact with things outside of its scope
//2. never change state or action - just reading 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT" :
            return {
                count: state.count - action.decrementBy
            };
        case 'SET' : 
            return {
                count: action.count
            }
        case 'RESET' :
            return {
                count: 0
            }
        default:
            return state;
         }
}

const store = createStore(countReducer);
   
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});




//actions - of an object that gets sent to the store
// actions like walk, stop walking, sit, work, stop/-working

//our actions will be increment/decrement/reset
//i'd like to increment the count


//but now to actually do something with it we call store.dispatch
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 2}))

store.dispatch(setCount({ count: 101}))

store.dispatch(setReset());




