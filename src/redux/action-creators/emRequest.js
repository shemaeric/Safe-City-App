import axios from 'axios';
import { URGENT_REQUEST } from '../action-types/requests';

export const sendRequest = urgent => async (dispatch) => {
    const url = 'https://safe-city-backend.herokuapp.com/api/emergency';
    console.log('action',urgent);

    try {
        const emergencyRequest = await axios.post(url, urgent);
        console.log('check', emergencyRequest);
        return dispatch({ type: URGENT_REQUEST, payload: emergencyRequest});
    } catch (error){
        return error;
    }
}
