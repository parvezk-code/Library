import { userReducer } from './reducers';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

export const combinedReducerList = combineReducers({
    user: userReducer,
    form: formReducer  // this reducer is provided by redux-form API
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancers = composeEnhancers(applyMiddleware(reduxThunk));

export const store = createStore(combinedReducerList, storeEnhancers);
