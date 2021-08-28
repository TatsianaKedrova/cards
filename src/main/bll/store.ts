import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {loginReducer} from "../../features/01-auth/login/login-reducer";
import {authReducer} from "./auth-reducer";
import {forgotReducer} from "./forgotReducer";
import {setNewPasswordReducer} from "./setNewPasswordReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    forgot: forgotReducer,
    newPassword: setNewPasswordReducer,
    login:loginReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args:any)=> any}> = ReturnType<PropertiesType<T>>

export default createStore(rootReducer, applyMiddleware(thunk));
