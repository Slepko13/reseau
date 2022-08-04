import axios from 'axios';
import { UserType } from '../types/types';
import { authAPI } from './auth-api';
import { profileAPI } from './profile-api';
import { followAPI, usersAPI } from './users-api';

export const instance = axios.create({
      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
            "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
      }

});

export {
      usersAPI,
      followAPI,
      profileAPI,
      authAPI
}


export enum ResponseCodes {
      Success = 0,
      Error = 1
}

export type GetItemsType = {
      items: Array<UserType>,
      totalCount: number,
      error: string | null
}

export type APIResponseType<DT = {}, RC = ResponseCodes> = {
      data: DT,
      resultCode: RC,
      messages: Array<string>
}