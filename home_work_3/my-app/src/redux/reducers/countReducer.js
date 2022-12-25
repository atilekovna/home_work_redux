import { types } from "./types";


const initialState = {
  value: "",
  lastValue: 0,
  numbers: [],
}

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case types.VALUE:
      return {
        ...state,
        value: action.payload
      }

    case types.COUNTER:
      return {
        ...state,
        numbers: [...state.numbers, state.lastValue + action.payload],
        lastValue: state.lastValue + action.payload,
        value: ""
      }

    case types.DELETE:
      return {
        ...state,
        numbers: [],
        lastValue: 0,
        value: ""
      }

    default:
      return state
  }
}
