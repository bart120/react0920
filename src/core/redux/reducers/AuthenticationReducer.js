import * as act from "../actions/AuthenticationActions";

const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') !== null,
    token: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case act.AUTH_LOGIN:
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { user: action.payload, isConnected: true };
        case act.AUTH_LOGOUT:
            sessionStorage.removeItem('USER');
            return { user: null, isConnected: false };
        default:
            return state;
    }

}