export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_VOTE_IN_USERS = 'SAVE_VOTE_IN_USERS';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function saveUsersVote (authUser, questionID, answer) {
    return {
        type: SAVE_VOTE_IN_USERS,
        authUser,
        questionID,
        answer
    };
}

export function saveUserQuestion (authUser, questionID) {
    return {
        type: SAVE_USER_QUESTION,
        authUser,
        questionID
    }
}