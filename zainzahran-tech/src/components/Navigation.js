import {Component} from "react";
import {NavLink} from "react-router-dom";
import React from "react";

class Navigation extends Component {
    render() {
        return (
            <div>
                <h1><NavLink exact to='/' style={{ textDecoration: 'none'}} >Zain Zahran</NavLink></h1>
                <nav>
                    <ul>
                        <li><NavLink exact activeClassName="current" to='/' >Home</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/CS428' >CS 428</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
