import { FETCH_JOKE } from '../actions/types'


const initialState = {
  secret: ''
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type){

    case FETCH_JOKE:
    return {
      secret: action.payload.joke
    }

    default:
    return state

  }
}

export default exampleReducer
