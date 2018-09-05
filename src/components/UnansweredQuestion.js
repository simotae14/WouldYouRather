import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Button, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import './Question.css';

class UnansweredQuestion extends Component {
    render () {
        return (
            <Card body>
                <CardTitle>{this.props.creator.name} asks</CardTitle>
                <Row>
                    <Col sm="3">
                        <img src={this.props.creator.avatarURL} className="avatar-img" alt="Avatar" />
                    </Col>
                    <Col sm="9">
                        <CardText>Would you rather...</CardText>
                        <ListGroup>
                            <ListGroupItem>{this.props.question.optionOne.text}</ListGroupItem>
                            <ListGroupItem>{this.props.question.optionTwo.text}</ListGroupItem>
                        </ListGroup>
                        <Link to={`/questions/${this.props.question.id}`}>
                            <Button className="open-btn">View Question</Button>
                        </Link>
                    </Col>
                </Row>
            </Card>
        );
    }
}

function mapStateToProps({ users }, { question }) {
    return {
        creator: users[question.author],
        question
    };
}

export default connect(mapStateToProps)(UnansweredQuestion);