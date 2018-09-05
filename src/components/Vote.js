import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import VoteDetails from './VotedDetails';
import VotePoll from './VotePoll';

class Vote extends Component {
    render () {
        return (
            <Fragment>
                { this.props.isAnswered ? (
                        <VoteDetails question={this.props.question} />
                    ) : (
                        <VotePoll question={this.props.question} />
                    )
                }
            </Fragment>
        );
    }
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