export type PostType = {
    id: number,
    message: string,
    like: number
}
export type ContactsType = {
    github: string,
    facebook: string
}

export type PhotosType = {
    small: string | null,
    large: string | null
}

export type ProfileType = {
    aboutMe?: string,
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType

}

export type ProfilePageType = {
    posts: Array<PostType>,
    profile: ProfileType,
    status: string
}

export type UserType = {
    id: number,
    name: string,
    status: string
    photos: PhotosType,
    followed?: boolean
}


export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}