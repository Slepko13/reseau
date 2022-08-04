import { GetItemsType, instance, APIResponseType } from "./api";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`,
            ).then(response => {
                return (
                    response.data
                )
            })
        )
    }

};

export let followAPI = {
    isUnFollowed(userId: number) {
        return (
            instance.delete<APIResponseType>(`follow/${userId}`,//!Could we set TYPE for axios delete???
            ).then(response => {
                return (
                    response.data
                )
            })
        )
    },
    isFollowed(userId: number) {
        return (
            instance.post<APIResponseType>(`follow/${userId}`, {},
            ).then(response => {
                return (
                    response.data
                )
            })
        )
    }
};