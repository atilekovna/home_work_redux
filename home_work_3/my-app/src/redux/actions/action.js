import { types } from "../reducers/types";


export  const setValue = (value) => {
   return {
      type: types.VALUE,
      payload: value
   }
}

export  const counterActions = (value) => {
   return {
      type: types.COUNTER,
      payload: value
   }
}

export const deleteAllActions = () => {
   return {
      type: types.DELETE
   }
}

