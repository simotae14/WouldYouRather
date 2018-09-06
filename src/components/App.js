import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import NavigationBar from './NavigationBar';
import Login from './Login';
import MainContainer from './MainContainer';
import Vote from './Vote';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';
import './App.css';
import { LastLocationProvider } from 'react-router-last-location';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <LastLocationProvider>
          <Fragment>
            <NavigationBar />
            <div className="global-container">
              {
                this.props.authUser ? (
                    <Switch>
                      <Route path='/' exact component={MainContainer} />
                      <Route path='/questions/:id' exact component={Vote} />
                      <Route path='/add' exact component={NewPoll} />
                      <Route path='/leaderboard' exact component={LeaderBoard} />
                      <Route component={NotFound} />
                    </Switch>
                ) : (
                  <Switch>
                    <Route path='/' exact component={Login} />
                    <Route component={NotFound} />
                  </Switch>
                )
              }
            </div>
          </Fragment>
        </LastLocationProvider>
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
