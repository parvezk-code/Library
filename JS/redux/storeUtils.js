export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Reducer definition
const INTIAL_STATE = {
    isSignedIn: null,
    userId: null
};
  
export const userReducer =  (state = INTIAL_STATE, action) => 
{    
    switch (action.type) 
    {
      case SIGN_IN:
        return { ...state, isSignedIn: true, userId: action.payload };
      case SIGN_OUT:
        return { ...state, isSignedIn: false, userId: null };
      default:
        return state;
    }
};


// Action creator definition
export const signIn = userId => {
    return {
      type: SIGN_IN,
      payload: userId
    };
  };
  
export const signOut = () => {
    return {
      type: SIGN_OUT
    };
};

// Store creation
import { createStore, combineReducers } from 'redux';

export const combinedReducerList = combineReducers({
    user: userReducer
});

export const store = createStore(combinedReducerList);



