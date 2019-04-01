import React, {Component} from 'react';
import logo from '../logo.svg';
import './Header.css'

class Header extends Component{
    render() {
        return (
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Books</h1>
            </header>
        )
    }
}

export default Header;