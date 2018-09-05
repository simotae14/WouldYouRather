export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_VOTE_IN_USERS = 'SAVE_VOTE_IN_USERS';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function saveUsersVote (authUser, qid, answer) {
    return {
        type: SAVE_VOTE_IN_USERS,
        authUser,
        qid,
        answer
    };
}