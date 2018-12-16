import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/jsx/Home';
import Login from './components/jsx/Login';
import Register from './components/jsx/Register';
import Upload from './components/jsx/Upload';
import NavBar from './components/jsx/NavBar';
import Footer from './components/jsx/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/upload" component={Upload} />
        </div>
      </Router>
    );
  }
}

export default App;
