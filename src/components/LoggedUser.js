import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class LoggedUser extends Component {
    render () {
        const { user } = this.props;
        console.log('User logged', user);
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