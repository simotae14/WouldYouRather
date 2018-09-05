import { RECEIVE_QUESTIONS, SAVE_VOTE_IN_QUESTIONS, SAVE_QUESTION } from '../actions/questions';

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
                [action.questionID]: {
                    ...state[action.questionID],
                    [action.answer]: {
                        ...state[action.questionID][action.answer],
                        votes: state[action.questionID][action.answer].votes.concat([action.authUser])
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }
}