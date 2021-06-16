import { SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_ERROR, SIGNOUT_SUCCESS, SIGNUP_ERROR, SIGNUP_SUCCESS } from ".";
import app from "../store/firebaseConfig";

export const signUpSuccess = () => ({
    type: SIGNUP_SUCCESS,
});

export const signUpErr = (error) => ({
    type: SIGNUP_ERROR,
    error: error
});

export const signInSuccess = (data) => ({
    type: SIGNIN_SUCCESS,
    payload: data
});

export const signInError = (error) => ({
    type: SIGNIN_ERROR,
    error: error
});

export const signOutSuccess = () => ({
    type: SIGNOUT_SUCCESS
});

export const signOutError = (error) => ({
    type: SIGNOUT_ERROR,
    error: error
});


export const signUp = (email, password) => {
    return async function(dispatch) {
        try{
            await app.auth().createUserWithEmailAndPassword(email, password);
            dispatch(signUpSuccess());
        }catch(error) {
            dispatch(signUpErr(error.message));
        }
    }
}

export const signIn = (email, password) => {
    return async function(dispatch) {
        try {
            const userCredential = await app.auth().signInWithEmailAndPassword(email, password);
            dispatch(signInSuccess(userCredential.user.email));
        }
        catch(error) {
            dispatch(signInError());
            console.log(error.message);
        }
    } 
}

export const signOut = () => {
    return async function(dispatch) {
        try {
            await app.auth().signOut();
            dispatch(signOutSuccess());
        }
        catch(err) {
            dispatch(signOutError(err));
        }
    }
}