import { combineReducers, createStore } from "redux";
import AuthenticationReducer from "./reducers/AuthenticationReducer";
import ServicesReducer from "./reducers/ServicesReducer";


export const store = createStore(combineReducers(
    {
        services: ServicesReducer,
        auth: AuthenticationReducer
    }
));