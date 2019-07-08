import { URGENT_REQUEST } from "../action-types/requests";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case URGENT_REQUEST:
      return {
        ...state,
        urgent: payload
      };
  }
};
