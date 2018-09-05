import { RECEIVE_USERS, SAVE_VOTE_IN_USERS } from '../actions/users';

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SAVE_VOTE_IN_USERS:
            return {
            ...state,
            [action.authUser]: {
                ...state[action.authUser],
                answers: {
                    ...state[action.authUser].answers,
                    [action.qid]: action.answer
                }
            }
        }
        default:
            return state
    }
}