import { _getQuestions, _getUsers } from '../utils/_DATA';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';

export function handleInitialData () {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()])
        .then(([ users, questions ]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        })
    };
}

