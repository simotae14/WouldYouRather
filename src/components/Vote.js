import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import VoteDetails from './VotedDetails';
import VotePoll from './VotePoll';

function Vote(props) {
    return (
        <Fragment>
            { props.isAnswered ? (
                    <VoteDetails question={props.question} />
                ) : (
                    <VotePoll question={props.question} />
                 )
            }
        </Fragment>
    );
}

function mapStateToProps({ users, authUser, questions }, { match }) {
    const questionId = match.params.id;
    const user = users[authUser];
    return {
        user: user,
        question: questions[questionId],
        isAnswered: user.answers[questionId] !== undefined
    }
}

export default connect(mapStateToProps)(Vote);