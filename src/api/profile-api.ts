import { PhotosType, ProfileType } from "../types/types";
import { instance, APIResponseType } from "./api";


type UpdateAvatarType = {
    photos: PhotosType
}
export const profileAPI = {
    getProfileData(id: number) {
        return (
            instance.get<ProfileType>(`profile/` + id,
            ).then(response => {
                return (
                    response.data
                )
            })
        )
    },

    getUserStatus(id: number) {
        return (
            instance.get<string>(`profile/status/` + id,
            ).then(response => response.data)
        )
    },
    updateUserStatus(status: string) {
        return (
            instance.put<APIResponseType>(`profile/status`, { status: status }
            ).then(response => response.data)
        )
    },
    updateUserAvatar(file: any) {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put<APIResponseType<UpdateAvatarType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },

    changeProfileData(profile: ProfileType) {
        return (
            instance.put<APIResponseType>(`profile`, profile
            )
        ).then(res => res.data)
    }
};