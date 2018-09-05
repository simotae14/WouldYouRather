import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA';
import { receiveQuestions, saveQuestionsVote } from '../actions/questions';
import { receiveUsers , saveUsersVote} from '../actions/users';
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
export function handleSaveVote (qid, answer ) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser: authUser,
            qid,
            answer
        })
        .then(() => {
            // save the question vote inside questions
            dispatch(saveQuestionsVote(authUser, qid, answer));
            // save the question vote inside users
            dispatch(saveUsersVote(authUser, qid, answer));
            dispatch(hideLoading());
        })
    };
}

