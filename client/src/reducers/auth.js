import {AUTH} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data})); // saving all data for login to local storage so info is still saved when page is reloaded
            return {...state, authData: action.data};
        default:
            return state;
    }
};

export default authReducer;