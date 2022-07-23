import {AUTH} from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user...

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up the user...

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

// if actions (action creators) are async, we need redux thunk, meaning we have a function that returns an async function with a dispatch)