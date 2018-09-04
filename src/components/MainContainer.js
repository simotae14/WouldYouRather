import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './MainContainer.css';

class MainContainer extends Component {
    render () {
        return (
            <p>Ciao</p>
        )
    }
}


export default connect()(MainContainer);