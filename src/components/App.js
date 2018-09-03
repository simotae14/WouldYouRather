import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import NavigationBar from './NavigationBar';
import Login from './Login';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavigationBar />
          <Route path='/' exact component={Login} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
