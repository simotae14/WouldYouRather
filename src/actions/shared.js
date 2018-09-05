import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA';
import { receiveQuestions, saveQuestionsVote, saveQuestion } from '../actions/questions';
import { receiveUsers , saveUsersVote, saveUserQuestion } from '../actions/users';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
        .then(([ users, questions ]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        })
    };
}

/* action to save the vote in both users and questions splices of the state */
export function handleSaveVote (questionID, answer ) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser: authUser,
            qid: questionID,
            answer
        })
        .then(() => {
            // save the question vote inside questions
            dispatch(saveQuestionsVote(authUser, questionID, answer));
            // save the question vote inside users
            dispatch(saveUsersVote(authUser, questionID, answer));
            dispatch(hideLoading());
        })
    };
}

/* action to create a new Poll by the authUser */
export function handleCreatePoll (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        const question = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authUser
        }
        dispatch(showLoading())
        return _saveQuestion(question)
            .then((formattedQuestion) => {
                dispatch(saveQuestion(formattedQuestion));
                dispatch(saveUserQuestion(authUser, formattedQuestion.id));
                dispatch(hideLoading());
            })
    }
}
