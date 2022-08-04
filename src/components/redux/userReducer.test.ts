import usersReducer, { UsersReducerType, actions } from './usersReducer'
let state: UsersReducerType;
beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'Mykola 0',
                followed: false,
                photos: { small: null, large: null },
                status: 'status 0'
            },
            {
                id: 1,
                name: 'Mykola 1',
                followed: false,
                photos: { small: null, large: null },
                status: 'status 1'
            },
            {
                id: 2,
                name: 'Mykola 2',
                followed: true,
                photos: { small: null, large: null },
                status: 'status 2'
            },
            {
                id: 3,
                name: 'Mykola 3',
                followed: true,
                photos: { small: null, large: null },
                status: 'status 3'
            },
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        isFollowingInProgress: []
    }
})

it("follow success", () => {
    const newState = usersReducer(state, actions.follow(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy()

})

it("unfollow success", () => {
    const newState = usersReducer(state, actions.unFollow(3))

    expect(newState.users[3].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy()

})