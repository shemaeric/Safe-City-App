import axios from 'axios';
import { USER_REGISTER, TEST, VALIDATE } from '../action-types/user';

export const userRegister = user => async (dispatch) => {
    const url = 'https://safe-city-backend.herokuapp.com/api/help_seekers/register';
    console.log(user);

    try {
        const registerRequest = await axios.post(url, user);
        return dispatch({ type: USER_REGISTER, payload: registerRequest});
    } catch (error){
        return error;
    }
}

export const test = () => (dispatch) => {
    return dispatch({type: TEST, payload: 'HELLO'})
}

export const validate = code => async (dispatch) => {
    const url = 'https://safe-city-backend.herokuapp.com/api/verify';

    try {
        const validateUser = await axios.post(url, code);
        return dispatch({ type: VALIDATE, payload: validateUser});
    } catch (error) {
        return error;
    }
}