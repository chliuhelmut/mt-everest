import actions from './actions';
import createActions from 'RootDir/generic/utils/createActions';

export const switchSignPage = (signType) => (dispatch) => {
  const actionType = signType === 'signup'?'go2SignUp':'go2SignIn';
  dispatch(createActions.onlyType(actions[actionType]));
};

export const isReady = () => (dispatch) => {
  dispatch(createActions.onlyType(actions.isReady));
};
