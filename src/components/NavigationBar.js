import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoggedUser from './LoggedUser';
import { unsetAuthedUser } from '../actions/authUser';

class NavigationBar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    handleLogout = () => {
        this.props.dispatch(unsetAuthedUser());
    }
    render() {
        const { authUser } = this.props;
        console.log('AUTH USER', authUser);
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Would You Rather...</NavbarBrand>
                    <NavbarToggler onClick={this.handleToggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/add">New Poll</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/leaderboard">Leaderboard</NavLink>
                            </NavItem>
                            {
                                authUser ? (
                                    <NavItem>
                                        <LoggedUser userID={authUser} />
                                        <NavLink tag={Link} to="/" onClick={this.handleLogout}>Logout</NavLink>
                                    </NavItem>
                                ) : (
                                    <NavItem>
                                        <NavLink tag={Link} to="/">Login</NavLink>
                                    </NavItem>
                                )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

// get the authed user from the store
function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(NavigationBar);