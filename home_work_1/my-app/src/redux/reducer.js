const initialState = {
  count: 0
}

export default function reducer (state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {...state, count: action.payload}
  }

  else if (action.type === "DECREMENT") {
    return {...state, count: action.payload}
  }

  return state
}