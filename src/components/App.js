import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import NavigationBar from './NavigationBar';
import Login from './Login';
import MainContainer from './MainContainer';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavigationBar />
          <div className="global-container">
            {
              this.props.authUser ? (
                <Route path='/' exact component={MainContainer} />
              ) : (
                <Route path='/' component={Login} />
              )
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  }
}

export default connect(mapStateToProps)(App);
