import { RECEIVE_USERS, SAVE_VOTE_IN_USERS, SAVE_USER_QUESTION } from '../actions/users';

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
                    [action.questionID]: action.answer
                }
            }
        }
        case SAVE_USER_QUESTION:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    questions: state[action.authUser].questions.concat([action.questionID])
                }
            }

        default:
            return state
    }
}