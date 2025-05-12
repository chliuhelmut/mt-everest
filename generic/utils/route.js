import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

export default {
  getCurrentLocation: history.location,
};
