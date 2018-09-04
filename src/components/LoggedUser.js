import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './LoggedUser.css';
class LoggedUser extends Component {
    render () {
        const { user } = this.props;
        return (
            <Fragment>
                <img src={user.avatarURL} alt="Avatar" className="avatar" />
                <span>Hello, { user.name }</span>
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