import { instance, APIResponseType } from "./api";

type GetAuthDataType = {
    id: number,
    email: string,
    login: string
}

type LoginDataType = {
    userId: number
}

export let authAPI = {
    getAuthData() {
        return (
            instance.get<APIResponseType<GetAuthDataType>>(`auth/me`,
            ).then(response => response.data)
        )
    },

    login(email: string, password: string, rememberMe = false) {
        return (
            instance.post<APIResponseType<LoginDataType>>(`auth/login`, { email, password, rememberMe })
                .then(response => response.data)
        )
    },
    logout() {
        return (
            instance.delete<APIResponseType>(`auth/login`)//!Could we set TYPE for axios delete???
                .then(response => response.data)
        )
    }
}