import {Dispatch} from "redux";
import {restorePasswordApi} from "../dll/restorePasswordApi";
import {RequestStatusType, setErrorMessage, setForgotStatus} from "./forgotReducer";

const initialState = {
    status: 'idle' as RequestStatusType,
    isNewPasswordSet: false,
}

export type InitialStateType = typeof initialState
//reducer
export const setNewPasswordReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "newPassword/SET_STATUS":
            return {...state, status: action.status}
        case "newPassword/SET_NEW_PASSWORD":
            return {...state, isNewPasswordSet: action.isPasswordSet}
        default:
            return state;
    }
}

//action creators
export const setPasswordRecoveryStatus = (status: RequestStatusType) => ({ type: "newPassword/SET_STATUS", status } as const);
export const setNewPassword = (isPasswordSet: boolean) => ({ type: "newPassword/SET_NEW_PASSWORD", isPasswordSet } as const);

//thunk
export const isUserSignedUpTC = (password: string, resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(setPasswordRecoveryStatus("loading"))
    restorePasswordApi.setNewPassword({ password, resetPasswordToken })
        .then(res => {
            console.log(res)
            if(res.data.info) {
                dispatch(setNewPassword(true))
                dispatch(setPasswordRecoveryStatus("succeeded"))
            } else if(res.data.error) {
                dispatch(setErrorMessage(res.data.error))
                dispatch(setPasswordRecoveryStatus("failed"))
            } else {
                dispatch(setErrorMessage("Some error occurred!"))
                dispatch(setPasswordRecoveryStatus("failed"))
            }
        })
        .catch(error => {
            dispatch(setErrorMessage(error.message ? error.message :"Network error occurred!"));
            dispatch(setForgotStatus("failed"))
        })
}

//action types

export type NewPasswordStatusType = ReturnType<typeof setPasswordRecoveryStatus>;
export type SetNewPasswordType = ReturnType<typeof setNewPassword>;
export type ActionTypes = NewPasswordStatusType | SetNewPasswordType;
