import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import './MainContainer.css';
import ListQuestions from './ListQuestions';

class MainContainer extends Component {
    state = {
        activeTab: 'toAnswers'
    }
    handleToggle = (tabValue) => {
        if (this.state.activeTab !== tabValue) {
            this.setState({
                activeTab: tabValue
            });
        }
    }
    render () {
        const { answered, unanswered } = this.props;
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={this.state.activeTab === 'toAnswers' ? 'active' : '' }
                        onClick={() => { this.handleToggle('toAnswers'); }}
                        >
                            To Answer
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={this.state.activeTab === 'answered' ? 'active' : '' }
                        onClick={() => { this.handleToggle('answered'); }}
                        >
                            Answered
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="toAnswers">
                        <Row>
                            <Col sm="12">
                                <ListQuestions questions={unanswered} type="toAnswers" />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="answered">
                        <Row>
                            <Col sm="12">
                                <ListQuestions questions={answered} type="answered" />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

function mapStateToProps({ authUser, users, questions }) {
    // retrieve the object of the authenticated user
    const userAuthenticated = users[authUser];
    // in this object retrieve the answered questions and sort them by timestamp
    const answeredKeys = Object.keys(userAuthenticated.answers);
    const answered = [];
    const unanswered = [];
    Object.keys(questions).map((keyValue) => {
        answeredKeys.includes(keyValue) ? answered.push(questions[keyValue]) : unanswered.push(questions[keyValue]);
    });
    return {
        answered: answered.sort((a, b) => b.timestamp - a.timestamp ),
        unanswered: unanswered.sort((a, b) => b.timestamp - a.timestamp ),
    }
}

export default connect(mapStateToProps)(MainContainer);