import { APIResponseType, ResponseCodes } from './../../api/api';
import { actions, followUser, unFollowUser } from "./usersReducer";
import { followAPI } from '../../api/users-api';

// jest.mock('../../api/users-api');
// import { followAPI } from '../../api/users-api';

// const mockedFollowAPI = followAPI as jest.Mocked<typeof followAPI>

jest.mock('../../api/users-api', () => {
    const resultSuccess: APIResponseType = {
        resultCode: 0,
        messages: [],
        data: {}
    };

    return {
        followAPI: {
            isFollowed: jest.fn(() => resultSuccess),
            isUnFollowed: jest.fn(() => resultSuccess)

        }
    }
});
// followAPI.isFollowed.mockResolvedValue(Promise.resolve({
//     resultCode: 0,
//     messages: [],
//     data: {}
// }))
const mockedDispatch = jest.fn();
const mockedGetState = jest.fn();


beforeEach(() => {
    mockedDispatch.mockClear();
    mockedGetState.mockClear();
})
it("calls followUser 3 times", async () => {
    const thunk = followUser(1);

    await thunk(mockedDispatch, mockedGetState, {});

    expect(mockedDispatch).toBeCalledTimes(3);
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
})

it("calls unFollowUser 3 times", async () => {
    const thunk = unFollowUser(1);

    await thunk(mockedDispatch, mockedGetState, {});

    expect(mockedDispatch).toBeCalledTimes(3);
})