import { SIGN_IN, SIGN_OUT } from './constants';

export const signIn = (userId) => {
    return {
      type: SIGN_IN,
      payload: userId
    };
};