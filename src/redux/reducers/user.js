import { USER_REGISTER, TEST, VALIDATE } from '../action-types/user';

const initialState = {};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case USER_REGISTER:
            return { 
                ...state,
                user: payload
            }

        case TEST: 
            return { 
                ...state,
                message: payload
        }
        case VALIDATE:
            return {
                ...state,
                validated: payload
            }
        default :
            return state;
    }
}