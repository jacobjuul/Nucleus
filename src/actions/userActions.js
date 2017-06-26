import api from '../utils/apiHelper';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE } from '../constants/actionTypes';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS })
  try {
    const users = await api.get.users()
    dispatch({ type: FETCH_USERS_SUCCESS, users: users.hits });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE, error });
  }
};
