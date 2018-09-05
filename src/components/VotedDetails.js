import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Col, Row, ListGroup, ListGroupItem, Progress } from 'reactstrap';
import './Question.css';

class VoteDetails extends Component {
    calcPercentage = (optionValues) => {
        const optionOneVotes = this.props.question.optionOne.votes.length;
        const optionTwoVotes = this.props.question.optionTwo.votes.length;
        const percentage = optionValues / (optionOneVotes + optionTwoVotes) * 100;
        return Math.round(percentage);
    }
    chooseByMe = (options) => {
        const authUser = this.props.authUser;
        return options.includes(authUser);
    }
    render () {
        const optionOneVotes = this.props.question.optionOne.votes.length;
        const optionTwoVotes = this.props.question.optionTwo.votes.length;

        return (
            <Card body>
                <CardTitle>Asked by {this.props.creator.name}</CardTitle>
                <Row>
                    <Col sm="3">
                        <img src={this.props.creator.avatarURL} className="avatar-img" alt="Avatar" />
                    </Col>
                    <Col sm="9">
                        <CardText>Results: Would you rather...</CardText>
                        <ListGroup>
                            <ListGroupItem>
                                {this.props.question.optionOne.text}
                                <div className="text-center">{this.calcPercentage(optionOneVotes)}%</div>
                                <Progress value={this.calcPercentage(optionOneVotes)} />
                                <p className="text-center">{optionOneVotes} of {optionOneVotes + optionTwoVotes} votes</p>
                                { this.chooseByMe(this.props.question.optionOne.votes) && (
                                    <p className="text-center text-success">Choose by me!!!</p>
                                )}
                            </ListGroupItem>
                            <ListGroupItem>
                                {this.props.question.optionTwo.text}
                                <div className="text-center">{this.calcPercentage(optionTwoVotes)}%</div>
                                <Progress value={this.calcPercentage(optionTwoVotes)} />
                                <p className="text-center">{optionTwoVotes} of {optionOneVotes + optionTwoVotes} votes</p>
                                { this.chooseByMe(this.props.question.optionTwo.votes) && (
                                    <p className="text-center text-success">Choose by me!!!</p>
                                )}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        );
    }
}

function mapStateToProps({ users, authUser }, { question }) {
    return {
        creator: users[question.author],
        question,
        authUser
    };
}

export default connect(mapStateToProps)(VoteDetails);