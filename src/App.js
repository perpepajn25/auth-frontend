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

  state = {
    auth: {
      currentUser: {}
    }
  }

  componentDidMount () {
    if (localStorage.getItem('token')){
      fetchReauthUser(localStorage.getItem('token'))
      .then(resp => {
        this.handleLogin(resp.user)
      })
    }
  }

  handleLogin = (user) => {
    const newAuth = {
      ...this.state.auth,
      currentUser: user
    }
    this.setState({
      auth: newAuth
    })
  }

  render() {
    const loggedIn = !!this.state.auth.currentUser.id
    return (
      <Fragment>
      <NavBar currentUser={this.state.auth.currentUser} />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" render={ () => <Profile loggedIn={loggedIn}/>}/>
        <Route exact path="/login" render={() => <Login loggedIn={loggedIn} handleLogin={this.handleLogin}/>} />
        <Route exact path="/my_secret" render={()=> <Secret loggedIn={loggedIn}/> } />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    );
  }
}

export default App;
