import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardText, CardHeader, CardBody, Col, CardTitle, Button, Form, FormGroup, Input } from 'reactstrap';
import { handleCreatePoll } from '../actions/shared';
import './NewPoll.css';

class NewPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }
    handleOptionOneChange = (e) => {
        this.setState({
            optionOne : e.target.value
        });
    }
    handleOptionTwoChange = (e) => {
        this.setState({
            optionTwo : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(handleCreatePoll(this.state.optionOne, this.state.optionTwo));
        this.props.history.push("/");
    }
    render () {
        return (
            <div className="new-container">
                <Card>
                    <CardHeader>Create a New Poll</CardHeader>
                    <CardBody>
                        <CardTitle>Complete the question:</CardTitle>
                        <CardText>Would You Rather...</CardText>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input type="text" name="optionOne" id="optionOne" placeholder="Insert option one" value={this.state.optionOne} onChange={this.handleOptionOneChange} />
                                </Col>
                            </FormGroup>
                            <CardText className="text-center">or</CardText>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Input type="text" name="optionTwo" id="optionTwo" placeholder="Insert option two" value={this.state.optionTwo} onChange={this.handleOptionTwoChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Button disabled={this.state.optionOne === '' || this.state.optionTwo === ''} className="submit-btn">Submit</Button>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default connect()(NewPoll);