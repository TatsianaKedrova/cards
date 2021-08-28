import {Dispatch} from "redux";
import {restorePasswordApi} from "../dll/restorePasswordApi";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState = {
    status: 'idle' as RequestStatusType,
    isUserSignedUp: false,
    error: null as string | null
}

export type InitialStateType = typeof initialState
//reducer
export const forgotReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "forgot/IS_USER_SIGNED_UP":
            return {...state, isUserSignedUp: action.isUserSignedUp}
        case "forgot/SET_ERROR_MESSAGE":
            return {...state, error: action.error}
        case "forgot/SET_STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

//action creators
export const checkIsUserSignedUp = (isUserSignedUp: boolean) => ({ type: "forgot/IS_USER_SIGNED_UP", isUserSignedUp } as const);
export const setErrorMessage = (error: string | null) => ({ type: "forgot/SET_ERROR_MESSAGE", error } as const);
export const setForgotStatus = (status: RequestStatusType) => ({ type: "forgot/SET_STATUS", status } as const);

//thunk
export const isUserSignedUpTC = (email: string, from: string, message: string) => (dispatch: Dispatch) => {
    dispatch(setForgotStatus("loading"))
    restorePasswordApi.checkEmailSignedUp({ email, from, message })
        .then(res => {
            console.log(res.data)
             if(res.data.success) {
                 dispatch(setForgotStatus("succeeded"))
                 dispatch(checkIsUserSignedUp(true))
                 dispatch(setErrorMessage("Check your email please"))
             } else {
                dispatch(setErrorMessage("Something went wrong"))
            }
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })
}

//action types
export type CheckIsUserSignedUpType = ReturnType<typeof checkIsUserSignedUp>;
export type SetErrorMessageType = ReturnType<typeof setErrorMessage>;
export type AppSetStatusType = ReturnType<typeof setForgotStatus>;
export type ActionTypes = CheckIsUserSignedUpType | SetErrorMessageType | AppSetStatusType;