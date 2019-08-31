import React, {Component, useState} from 'react';
import './App.css';
import {Navigation} from "@material-ui/icons";
import { NavLink, Switch, Route } from 'react-router-dom';




function App() {
    const [navToggle, setNavToggle] = useState(true);
    class Navigation extends Component {
        render() {
            return (
                <nav>
                    <ul>
                        <li><NavLink exact activeClassName="current" to='/' >Home</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/CS428' >CS 428</NavLink></li>
                    </ul>
                </nav>
            );
        }
    }
    const Home = () => (
        <div className='home'>
            <h1>Welcome to my portfolio website</h1>
            <p> Feel free to browse around and learn more about me.</p>
        </div>
    );

    const About = () => (
        <div className='about'>
            <h1>About Me</h1>
            <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
            <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        </div>
    );

    const Contact = () => (
        <div className='contact'>
            <h1>Contact Me</h1>
            <p>You can reach me via email: <strong>hello@example.com</strong></p>
        </div>
    );
    const CS428 = () => (
        <div className='CS428'>
            <h1>Virtual and Augmented Reality</h1>
        </div>
    );

    const Main = () => (
        <Switch>
            <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact} />
            <Route exact path='/CS428' component={CS428}  />
        </Switch>
    );
    let navHeader = navToggle ? <Navigation/> : '';

    return (
      <div className='app'>
          <h1>Zain Zahran</h1>
          {navHeader}
          <Main/>
      </div>
  );
}

export default App;
