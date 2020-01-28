import * as axios from 'axios';

// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({

      withCredentials: true,
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {

            "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
      }



});
export let usersAPI = {
      getUsers (currentPage, pageSize) {
            return (
                  instance.get(/*baseUrl +*/`users?page=${currentPage}&count=${pageSize}`,
                        // {
                        //       withCredentials: true
                        // }
                  ).then(response => {
                        return (
                              response.data
                        )
                  })
            )
      }


};
export let followAPI = {
      isUnFollowed (userId) {
            return (
                  instance.delete(/*baseUrl +*/`follow/${userId}`,
                        // {
                        //       withCredentials: true
                        // "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
                        // }
                  ).then(response => {
                        return (
                              response.data
                        )
                  })
            )
      },
      isFollowed (userId) {
            return (
                  instance.post(/*baseUrl +*/`follow/${userId}`, {},
                        // {
                        //       withCredentials: true
                        // "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
                        // }
                  ).then(response => {
                        return (
                              response.data
                        )
                  })
            )
      }
};

export let profileAPI = {
      getProfileData (id) {
            return (
                  instance.get(`profile/` + id,

                  ).then(response => {
                        return (
                              response.data
                        )
                  })
            )
      },

      getUserStatus (id) {
            return (
                  instance.get(`profile/status/` + id,

                  )
            )
      },
      updateUserStatus (status) {
            return (
                  instance.put(`profile/status`, { status: status }


                  )
            )
      }
};

export let authAPI = {
      getAuthData () {
            return (
                  instance.get(`auth/me`,

                  ).then(response => {
                        return (
                              response.data
                        )
                  })
            )
      },

      login (email, password, rememberMe = false) {
            return (
                  instance.post(`auth/login`, { email, password, rememberMe })
                        .then(response => { return (response.data) })
            )
      },
      logout () {
            return (
                  instance.delete(`auth/login`)
                        .then(response => { return (response.data) })
            )
      }


}