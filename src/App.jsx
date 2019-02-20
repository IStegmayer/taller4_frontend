import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import './App.css';
import './components/css/footer.css'
import { ProtectedRoute } from './components/jsx/protected_route';
import Home from './components/jsx/Home';
import Login from './components/jsx/Login';
import Register from './components/jsx/Register';
import Upload from './components/jsx/Upload';
import NavBar from './components/jsx/NavBar';
import Footer from './components/jsx/Footer';
import Profile from './components/jsx/Profile';


class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props){
    super(props);
    const { cookies } = props;
    this.state = {
      loggedIn: cookies.get('loggedIn') || false,
      userName: cookies.get('userName') || false
    }

    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.setLoggedOut = this.setLoggedOut.bind(this);

  }

  setLoggedIn(userName){
    const { cookies } = this.props;
    cookies.set('loggedIn', true);
    cookies.set('userName', userName);
    this.setState({
      loggedIn: true,
      userName: userName
    });
  }

  setLoggedOut(){
    const { cookies } = this.props;
    cookies.remove('loggedIn');
    cookies.remove('userName');
    this.setState({
      loggedIn: false
    });
  }



  render() {
    
    return (
      <CookiesProvider >
        <BrowserRouter >
          <div>
            <NavBar loggedIn={this.state.loggedIn} setLoggedOut={this.setLoggedOut}/>
            <div className="mainBody container">
              <Route path="/home" render={props => <Home loggedIn={this.state.loggedIn} userName={this.state.userName} {...props} />} />
              <Route path="/login" render={props => <Login loggedIn={this.state.loggedIn} setLoggedIn={this.setLoggedIn}  {...props} />} />
              <Route path="/register" component={Register} loggedIn={this.state.loggedIn} />
              <Route exact path="/upload" render={props => <Upload loggedIn={this.state.loggedIn} userName={this.state.userName} {...props} />} />
              <Route exact path="/profile" render={props => <Profile loggedIn={this.state.loggedIn} userName={this.state.userName} {...props} />} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </CookiesProvider >
    );
  }
}

export default withCookies(App);
