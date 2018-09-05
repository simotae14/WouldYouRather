import React, { Fragment } from 'react';
import './NotFound.css';
import { Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function NotFound(props) {
    return (
        <div className="container-jumbo">
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3 text-center">404</h1>
            <p className="lead">Return to
            <Link to={`/`}>
            &nbsp;home
            </Link>
            </p>
            </Container>
        </Jumbotron>
        </div>
    );
}