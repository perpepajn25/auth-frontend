import React from 'react';
import { Redirect } from 'react-router-dom'
import { fetchLoginUser } from '../adapters/authAdapter'

class Login extends React.Component {
  state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    }

  handleChange = (e) => {
    e.persist()
    this.setState((prevState) => {
      return {
       fields: {
         ...prevState.fields,
         [e.target.name]: e.target.value
        }
       }
      });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    fetchLoginUser(this.state.fields)
    .then(resp => {
      this.props.handleLogin(resp.user)
      localStorage.setItem('token', resp.user.id)
    })
  };

  render() {
    const { fields } = this.state;
    if (this.props.loggedIn) {
      return <Redirect to='profile' />
    } else {
    return (
      <div>
        {this.state.error ? <h1>Try again...</h1> : null}
        <div className="ui form container">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }}
}

export default Login;
