import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); // get response (containing data object) from api
        dispatch({type: 'FETCH_ALL', payload: []});

    } catch (error) {
        console.log(error.message);
    }
}