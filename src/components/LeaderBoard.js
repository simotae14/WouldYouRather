import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Media, Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import './LeaderBoard.css';

class LeaderBoard extends Component {
  render() {
    return (
      <ListGroup>
        {
            this.props.ranking.length > 0 ? (
                this.props.ranking.map((rankItem, index) => (
                    <ListGroupItem key={rankItem.userID}>
                        <Container>
                            <Row>
                                <Col sm="3">
                                    <Media>
                                        <Media className="img-avatar" object src={rankItem.userAvatar} alt="Avatar logo" />
                                    </Media>
                                </Col>
                                <Col sm="6">
                                    <Media body>
                                        <Media heading>
                                            {rankItem.userName}
                                        </Media>
                                        <Media>
                                            <ListGroup className="items-user">
                                                <ListGroupItem className="items-user">
                                                    Asnwered: <span>{ rankItem.userAnswers }</span>
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Created: <span>{ rankItem.userQuestions }</span>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Media>
                                    </Media>
                                </Col>
                                <Col sm="3">
                                    <Media>
                                        <div>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle className="text-center">
                                                        Score
                                                    </CardTitle>
                                                </CardBody>
                                                <CardBody>
                                                    <CardText className="text-center">
                                                        <Badge className="score" color={ index === 0 ? "success" : "secondary"} pill>
                                                            {rankItem.userScore}
                                                        </Badge>
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Media>
                                </Col>
                            </Row>
                        </Container>
                    </ListGroupItem>
                ))
            ) : (
                <p>Sorry! There are no users.</p>
            )
        }
      </ListGroup>
    );
  }
}

function mapStateToProps({ users }) {
    const ranking = Object.keys(users).map((id) => {
        const userAvatar = users[id].avatarURL;
        const userName = users[id].name;
        const userAnswers = Object.keys(users[id].answers).length;
        const userQuestions = users[id].questions.length;
        const userScore = userAnswers + userQuestions;
        return ({
            userID: id,
            userAvatar,
            userName,
            userAnswers,
            userQuestions,
            userScore
        });
    }).sort((a, b) => b.userScore - a.userScore );
    return {
        ranking
    };

}

export default connect(mapStateToProps)(LeaderBoard);