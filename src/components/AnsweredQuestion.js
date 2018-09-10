import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, Button, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Question.css';

function AnsweredQuestion(props) {
    return (
        <Card body>
            <CardTitle>{props.creator.name} asks</CardTitle>
            <Row>
                <Col sm="3">
                    <img src={props.creator.avatarURL} className="avatar-img" alt="Avatar" />
                </Col>
                <Col sm="9">
                    <CardText>Would you rather...</CardText>
                    <ListGroup>
                        <ListGroupItem>{props.question.optionOne.text}</ListGroupItem>
                        <ListGroupItem>{props.question.optionTwo.text}</ListGroupItem>
                    </ListGroup>
                    <Link to={`/questions/${props.question.id}`}>
                        <Button className="open-btn">View Question</Button>
                    </Link>
                </Col>
            </Row>
        </Card>
    );
}

function mapStateToProps({ users }, { question }) {
    return {
        creator: users[question.author],
        question
    };
}

export default connect(mapStateToProps)(AnsweredQuestion);