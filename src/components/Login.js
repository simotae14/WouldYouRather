import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render () {
        const { users } = this.props;
        console.log('User logged', users);
        return (
            <Fragment>
                Login
            </Fragment>
        )
    }
}

// get the user object of the authUser from the store
function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Login);