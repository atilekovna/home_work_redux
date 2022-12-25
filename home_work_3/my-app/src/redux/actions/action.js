import { types } from "../reducers/types";


export  const setValue = (value) => {
   return {
      type: types.VALUE,
      payload: value
   }
}

export  const addNumberActions = (value) => {
   return {
      type: types.NUMBER,
      payload: value
   }
}

export const deleteAllNumbersActions = () => {
   return {
      type: types.DELETE
   }
}

