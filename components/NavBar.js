
import React, { Component } from 'react';
import logo from '../logo.svg';

const backgroundshade = {
  backgroundImage: 'linear-gradient(blue, #223A5E)'
}

class NavBar extends Component {
  render() {
    return (
      <nav className="jumbotron">
        <h1><img src={logo} className="App-logo" alt="logo" />
        <strong>Song</strong>
        </h1>
      </nav>
        )
      }
    }
export default NavBar
