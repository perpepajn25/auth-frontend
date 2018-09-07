import { LOGIN_USER, LOGOUT_USER, TOGGLE_AUTHENTICATING  } from '../actions/types'


const initialState = {
  authenticating: true,
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
    return {
      currentUser: action.payload.user
    }

    case LOGOUT_USER:
    return {
      currentUser: {}
    }

    case TOGGLE_AUTHENTICATING:
    return {
      authenticating: !state.authenticating
    }

    default:
    return state

  }
}

export default authReducer
