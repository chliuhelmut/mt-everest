import axios from 'axios';

import actions from './actions';
import createActions from 'RootDir/generic/utils/createActions';

export const login = (data) => (dispatch) => {
  dispatch(createActions.onlyType(actions.loginRequest));

  return axios.post('/auth/login', data).then((result) => (
    dispatch(createActions.withParams(actions.loginSuccess, result.data))
  )).catch((err) => (
    dispatch(createActions.onlyType(actions.loginFailed))
  ));
};

export const logout = () => (dispatch) => {
  dispatch(createActions.onlyType(actions.logoutRequest));

  return axios.post('/auth/logout').then((result) => {
    dispatch(createActions.withParams(actions.logoutSuccess, result.data));
  }).catch((err) => {
    dispatch(createActions.onlyType(actions.logoutFailed));
  });
};

export const signup = (data) => (dispatch) => {
  dispatch(createActions.onlyType(actions.signupRequest));

  return axios.post('/auth/signup', data).then((result) => {
    dispatch(createActions.withParams(actions.signupSuccess, result.data));
  }).catch((err) => {
    dispatch(createActions.onlyType(actions.signupFailed));
  });
};

export const getProfile = () => (dispatch) => {
  dispatch(createActions.onlyType(actions.profileRequest));

  return axios.get('/api/user/profile').then((result) => {
    dispatch(createActions.withParams(actions.profileSuccess, result.data));
  }).catch((err) => {
    dispatch(createActions.onlyType(actions.profileFailed));
  });
};
