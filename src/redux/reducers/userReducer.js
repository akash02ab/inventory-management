import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_ERROR, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../actions";

const initialState = {
    currentUser: null,
    signInError: null, 
    signOutError: null,
    signUpError: null,
    validated: false,
    confirmed: false
}

export const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS: return {...state, signUpError: null, confirmed: true};
        case SIGNUP_ERROR: return {...state, signUpError: action.error, confirmed: false};
        case SIGNIN_SUCCESS: return {...state, currentUser: action.payload, signInError: null, validated: true};
        case SIGNIN_ERROR: return {...state, currentUser: null, signInError: action.error};
        case SIGNOUT_SUCCESS: return {...state, signOutError: null, validated: false};
        case SIGNOUT_ERROR: return {...state, signOutError: action.error};
        default: return state;
    }
}