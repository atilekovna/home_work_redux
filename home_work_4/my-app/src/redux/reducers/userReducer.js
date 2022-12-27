import { types } from "../types/types";


const initialState = {
  user: {}
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {...state, user: action.payload}

    default:
      return state
  }
}