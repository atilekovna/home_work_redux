import { types } from "../types/types";


export function getUsersAction(users) {
  return {
    type: types.GET_USERS,
    payload: users
  }
}

export function fetchUsersAction() {
  return async function (dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    dispatch(getUsersAction(data))
  }
}

export function getUserAction(user) {
  return {
    type: types.GET_USER_INFO,
    payload: user
  }
}

export function fetchUserAction(id) {
  return async function (dispatch) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id} `)
    const data = await response.json()

    dispatch(getUserAction(data))
  }
}