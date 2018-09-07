import { LOGIN_USER, LOGOUT_USER, TOGGLE_AUTHENTICATING  } from '../actions/types'


const initialState = {
  currentUser: {}
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type){

    case LOGIN_USER:
    return {
      currentUser: action.payload.user
    }

    case LOGOUT_USER:
    return {
      currentUser: {}
    }

    // case TOGGLE_AUTHENTICATING:
    // return {
    // }

    default:
    return state

  }
}

export default exampleReducer
