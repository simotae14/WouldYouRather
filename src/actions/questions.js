export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_VOTE_IN_QUESTIONS = 'SAVE_VOTE_IN_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function saveQuestionsVote (authUser, questionID, answer) {
    return {
        type: SAVE_VOTE_IN_QUESTIONS,
        authUser,
        questionID,
        answer
    };
}

export function saveQuestion (question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}