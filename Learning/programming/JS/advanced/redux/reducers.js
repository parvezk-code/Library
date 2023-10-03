import { SIGN_IN } from './constants';

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
      default:
        return state;
    }
};