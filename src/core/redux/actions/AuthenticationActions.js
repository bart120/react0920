export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const login = (payload) => ({
    payload: payload,
    type: AUTH_LOGIN
})

export const logout = (payload) => ({
    payload: null,
    type: AUTH_LOGOUT
})