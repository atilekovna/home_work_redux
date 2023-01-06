import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    result: 0,
  },
  reducers: {
    changeInputFirst: (state, action) => {
      state.firsValue = +action.payload
    },
    changeInputSecond: (state, action) => {
      state.secondValue = +action.payload
    },
    plus: (state, action) => {
      state.result = state.firsValue + state.secondValue
    },
    minus: (state, action) => {
      state.result = state.firsValue - state.secondValue
    },
    multiply: (state, action) => {
      state.result = state.firsValue * state.secondValue
    },
    divide: (state, action) => {
      state.result = state.firsValue / state.secondValue
    }
  }
});


export const {changeInputFirst, changeInputSecond, plus, minus, multiply, divide} = counterSlice.actions;

export default counterSlice.reducer;