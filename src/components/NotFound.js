import React, { Component } from 'react';
import './NotFound.css';
import { Jumbotron, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class NotFound extends Component {
    render() {
        if (!this.props.authUser || this.props.authUser === '') {
            alert("You are not logged in! You will be redirected to the login page.");
            return <Redirect to='/' />;
        }
        return (
            <div className="container-jumbo">
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="display-3 text-center">404</h1>
                <p className="lead">This page isn't reachable, go to the
                <Link to={`/`}>
                &nbsp;homepage
                </Link>
                </p>
                </Container>
            </Jumbotron>
            </div>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    };
}

export default connect(mapStateToProps)(NotFound);
