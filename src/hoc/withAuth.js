import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const withAuth = (WrappedComponent) => {

  class AuthComponent extends React.Component {
    render( ) {
      console.log(this.props)
      if (this.props.currentUser.id) {
        return <WrappedComponent dog='dog' />
      } else if (this.props.authenticating) {
        return <div className='container'> Loading..... </div>
      } else {
        return <Redirect to="login" />
      }
    }
  }

    return connect(mapStateToProps)(AuthComponent)
}

const mapStateToProps = (state) => {
  return {
    authenticating: state.authState.authenticating,
    currentUser: state.authState.currentUser
  }
}

export default withAuth
