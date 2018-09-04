import React, { Fragment } from 'react';
import { Card, CardText } from 'reactstrap';
import AnsweredQuestion from './AnsweredQuestion';
import UnansweredQuestion from './UnansweredQuestion';

export default function ListQuestions(props) {
    if (!props.questions || props.questions.length === 0) {
        return (
            <Card body>
                <CardText>No Questions!!!</CardText>
            </Card>
        );
    } else if (props.type === 'answered') {
        return (
            <Fragment>
                {
                    props.questions.map((question) => (
                        <AnsweredQuestion key={question.id} question={question} />
                    ))
                }
            </Fragment>
        );
    } else if (props.type === 'toAnswers') {
        return (
            <Fragment>
                {
                    props.questions.map((question) => (
                        <UnansweredQuestion key={question.id} question={question} />
                    ))
                }
            </Fragment>
        );
    }
}