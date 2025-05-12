import userActionTypes from './actions';

let initStates = {
  isLogin: false,
  profile: {},
};

export default (state = initStates, action) => {
  let result = null;

  switch (action.type) {
    case userActionTypes.loginSuccess:
      result = {...state, profile: action.payload.user, isLogin: action.payload.isAuthenticated};
      break;
    case userActionTypes.loginFailed:
      result = {...state, isLogin: false};
      break;

    case userActionTypes.logoutSuccess:
      result = {...state, profile: {}, isLogin: action.payload.isAuthenticated};
      break;

    case userActionTypes.profileSuccess:
      result = {...state, profile: action.payload.user, isLogin: action.payload.isAuthenticated};
      break;

    default:
      result = state;
  }

  return result;
};
