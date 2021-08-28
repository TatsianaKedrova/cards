import {authAPI, InitialStateType} from "../../../main/dll/api";
import {Dispatch} from "redux";

let initialState = {
    email: "",
    login: "",
    idUser: "",
    isAuth: false
};


export const loginReducer = (state = initialState, action: ActionsTypeLogin): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED-IN":
            return {
                ...state,
                email: action.email,
                isAuth: action.isAuth
            };
        default:
            return state;
    }
};



// actions
export const setAuthUserData = (email: string, isAuth: boolean) =>
    ({type: "SET-IS-LOGGED-IN", email, isAuth} as const)

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean) => async(dispatch: Dispatch<ActionsTypeLogin>) => {

    authAPI.login(email, password, rememberMe)
        .then(res => {
                dispatch(setAuthUserData(res.data.email,true))
            }
        )
        .catch((e) => {
            const error = e.response ? e.response.data.error: (e.message + ', more details in the console');
            alert(error)
            console.log('Error: ', {...e})
        })

}


type ActionsTypeLogin = ReturnType<typeof setAuthUserData>
