import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardTitle, CardText, Col, Form, FormGroup, Row, Label, Input } from 'reactstrap';
import { handleSaveVote } from '../actions/shared';
import './Question.css';

class VotePoll extends Component {
    state = {
        optionVoted: ''
    }
    handleSelection = (e) => {
        this.setState({
            optionVoted: e.target.value
        });
    }
    //handleSaveVote (authedUser, qid, answer )
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleSaveVote(this.props.question.id, this.state.optionVoted));
    }
    render () {
        return (
            <Card body>
                <CardTitle>{this.props.creator.name} asks:</CardTitle>
                <Row>
                    <Col sm="3">
                        <img src={this.props.creator.avatarURL} className="avatar-img" alt="Avatar" />
                    </Col>
                    <Col sm="9">
                        <CardText>Would you rather...</CardText>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="answer"
                                        value="optionOne"
                                        onChange={this.handleSelection}
                                    />{' '}{this.props.question.optionOne.text}
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="answer"
                                        value="optionTwo"
                                        onChange={this.handleSelection}
                                    />{' '}{this.props.question.optionTwo.text}
                                </Label>
                            </FormGroup>
                            <div>
                                <Button className="open-btn" disabled={this.state.optionVoted === ''}>Vote</Button>
                            </div>
                        </Form>
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

export default connect(mapStateToProps)(VotePoll);