import * as act from "../actions/AuthenticationActions";

const INITIAL_STATE = {
    user: null,
    isConnected: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case act.AUTH_LOGIN:
            return { user: action.payload, isConnected: true };
        case act.AUTH_LOGOUT:
            return { user: null, isConnected: false };
        default:
            return state;
    }

}