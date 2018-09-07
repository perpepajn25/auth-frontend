import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Login from './components/Login'
import Secret from './components/Secret'
import NotFound from './components/NotFound'

import { fetchReauthUser } from './adapters/authAdapter'
import './App.css';

class App extends Component {

  // state = {
  //   authenticating: true,
  //   auth: {
  //     currentUser: {}
  //   }
  // }
  //
  componentDidMount () {
    if (localStorage.getItem('token')){
      fetchReauthUser()
      .then(resp => {
        console.log(resp)
        this.handleLogin(resp.user)
      })
    } else {
      this.setState({
        authenticating: false
      })
    }
  }
  //
  // handleLogin = (user) => {
  //   const newAuth = {
  //     ...this.state.auth,
  //     currentUser: user
  //   }
  //   this.setState({
  //     authenticating: false,
  //     auth: newAuth
  //   })
  // }

  handleLogout = () => {
    const clearAuth = {
      ...this.state.auth,
      currentUser: {}
    }
    this.setState({
      auth: clearAuth
    })
    localStorage.clear()
  }

  render() {
    const loggedIn = !!this.state.auth.currentUser.id
    return (
      <Fragment>
      <NavBar currentUser={this.state.auth.currentUser} handleLogout={this.handleLogout} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" render={ () => <Profile
                                                  currentUser={this.state.auth.currentUser}
                                                  authenticating={this.state.authenticating}/>}/>
        <Route exact path="/login" render={() => <Login loggedIn={loggedIn} handleLogin={this.handleLogin}/>} />
        <Route exact path="/my_secret" render={()=> <Secret loggedIn={loggedIn}/> } />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    );
  }
}

export default App;
