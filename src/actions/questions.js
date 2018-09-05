export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_VOTE_IN_QUESTIONS = 'SAVE_VOTE_IN_QUESTIONS';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function saveQuestionsVote (authUser, qid, answer) {
    return {
        type: SAVE_VOTE_IN_QUESTIONS,
        authUser,
        qid,
        answer
    };
}