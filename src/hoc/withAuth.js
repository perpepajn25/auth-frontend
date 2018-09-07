import React from 'react'
import { Redirect } from 'react-router-dom'


const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render( ) {
      if (this.props.loggedIn) {
        return <WrappedComponent dog='dog' />
      } else {
        return <Redirect to="login" />
      }
    }
  }
}


export default withAuth
