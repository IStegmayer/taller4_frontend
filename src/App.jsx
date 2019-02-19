import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './components/css/footer.css'
import Home from './components/jsx/Home';
import Login from './components/jsx/Login';
import Register from './components/jsx/Register';
import Upload from './components/jsx/Upload';
import NavBar from './components/jsx/NavBar';
import Footer from './components/jsx/Footer';
import Profile from './components/jsx/Profile';


class App extends Component {

  constructor(){
    super();
    this.state = {
    }

  }

  render() {
    
    return (
      <BrowserRouter >
        <div>
          <NavBar />
          <div className="mainBody container">
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/upload" component={Upload} />
            <Route path="/profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
