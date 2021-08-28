import axios from "axios";


export type InitialStateType = {
    email: string,
    login: string,
    idUser: string,
    isAuth: boolean
}

type ResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string;
}

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0"
});

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})},

    me(){
        return instance.post<ResponseType>('/auth/me')
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(response => response.data)
    },
    register(email:string, password: string) {
        return instance.post('/auth/register', {email,password})
            .then(response => response.data)
    }
};
