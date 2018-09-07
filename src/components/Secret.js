import React from 'react'

import withAuth from '../hoc/withAuth'

class Secret extends React.Component {
  state = {
    secret: ''
  }

  componentDidMount () {
    const options = {
      headers: {
        Accept: 'application/json'
      }
    }
    fetch('https://icanhazdadjoke.com/', options)
    .then(resp => resp.json())
    .then(resp => {
      this.setState({
        secret: resp.joke
      })
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className='container'>
        <h3> {this.state.secret} </h3>
      </div>
    );
  }
};

export default withAuth(Secret)
