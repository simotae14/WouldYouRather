import { RECEIVE_QUESTIONS, SAVE_VOTE_IN_QUESTIONS } from '../actions/questions';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_VOTE_IN_QUESTIONS:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authUser])
                    }
                }
            }
        default:
            return state
    }
}