import {combineReducers} from 'redux';
import user from 'RootDir/entry/Member/models';
import common from 'RootDir/entry/common/models';

export default combineReducers({
  user,
  common,
});
