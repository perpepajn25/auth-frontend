import { LOGOUT_USER, LOGIN_USER, AUTHENITCATE_USER, FETCH_JOKE } from './types'
import { fetchLoginUser, fetchReauthUser }

export const loginUser  = () => {
  (dispatch) => {
    fetchLoginUser.then(userObj => {
      dispatch({
        type: LOGIN_USER,
        payload: userObj
      })
    })
  }
}
