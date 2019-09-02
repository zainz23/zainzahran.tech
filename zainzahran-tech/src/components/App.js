import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// Component Imports
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import CS428 from './CS428/CS428';
// Navigation + Main Routing
import Navigation from './Navigation';
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router";



class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            navToggle: true
        }
    };
    componentDidMount() {
        let currentRoute = this.props.location.pathname;
        if (currentRoute === '/CS428') {
            this.setState({
                navToggle: false
            })
        }
    };

    render() {
        const Main = () => (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/CS428' component={CS428}  />
                <Redirect to="/" />
            </Switch>
        );
        let navHeader = this.state.navToggle ? <Navigation/> : '';

        return (
            <div className='app'>
                {navHeader}
                <Main/>
            </div>
        );
    }
}

export default withRouter(App);
