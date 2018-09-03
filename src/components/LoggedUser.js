import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class LoggedUser extends Component {
    render () {
        const { authUser } = this.props;
        console.log('User logged', authUser)
        return (
            <Fragment>
                Logged
            </Fragment>
        )
    }
}

// get the user object of the authUser from the store
function mapStateToProps({ users }, { userID }) {
    return {
        user: users[userID]
    }
}

export default connect(mapStateToProps)(LoggedUser);