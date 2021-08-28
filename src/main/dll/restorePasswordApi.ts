import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // withCredentials: true
});

export const restorePasswordApi = {

    checkEmailSignedUp(data: ForgotRequestDataType) {
        return instance.post<CheckEmailResponseType>('auth/forgot', data )
    },
    setNewPassword(data: NewPasswordRequestType) {
        return instance.post<NewPasswordResponseType>('auth/set-new-password', data)
    }
}

export type ForgotRequestDataType = {
    email: string
    from: string
    message: string
}

export type CheckEmailResponseType = {
    info: string | null
    answer: boolean
    html: boolean
    success: boolean
}

export type NewPasswordRequestType = {
    password: string
    resetPasswordToken: string
}

export type NewPasswordResponseType = {
    info: string
    error: string
}
