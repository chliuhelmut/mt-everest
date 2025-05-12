import actionTypes from './actions';

let initStates = {
  isSignUpPage: false,
  isReady: false,
};

export default (state = initStates, action) => {
  let result = null;

  switch (action.type) {
    case actionTypes.go2SignUp:
      result = {...state, isSignUpPage: true};
      break;

    case actionTypes.go2SignIn:
      result = {...state, isSignUpPage: false};
      break;

    case actionTypes.isReady:
      result = {...state, isReady: true};
      break;

    default:
      result = state;
  }

  return result;
};
