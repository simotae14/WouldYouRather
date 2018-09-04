import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.css';
import { setAuthedUser } from '../actions/authUser';

class Login extends Component {
    state = {
        authUser : ''
    }
    handleChange = (e) => {
        const userSelected = e.target.value;

        this.setState(() => ({
            authUser: userSelected
        }));
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.dispatch(setAuthedUser(this.state.authUser));
        this.props.history.push('/');
    }
    render () {
        return (
            <Card className="login-form">
                <CardBody>
                    <CardTitle className="card-title text-center">Login to Would You Rather</CardTitle>
                </CardBody>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label for="usersSelect">Usernames:</Label>
                            <Input
                                type="select"
                                name="select"
                                value={this.state.authUser}
                                id="usersSelect"
                                onChange={this.handleChange}
                            >
                                <option value='' disabled>Select a user</option>
                                {this.props.users.map((user) => (
                                        <option key={user.userID} value={user.userID}>{user.userName}</option>
                                    )
                                )}
                            </Input>
                        </FormGroup>
                        <Button
                            disabled={this.state.authUser === ''}
                            className="btn btn-primary btn-block"
                            onClick={this.handleLogin}
                        >Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

// get the user object of the authUser from the store
function mapStateToProps({ users }) {
    const usersValues = Object.keys(users).map((id) => {
        return ({
            userID: users[id].id,
            userName: users[id].name
        })
    })
    return {
        users: usersValues
    }
}

export default connect(mapStateToProps)(Login);