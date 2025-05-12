/* eslint react/no-children-prop: "off" */
import 'RootDir/generic/utils/createRootApp';

import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import {Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootRreducers from 'RootDir/generic/rootReducers';
import Routes from 'RootDir/generic/routers';

// For mobile browser.
// https://github.com/zilverline/react-tap-event-plugin#introduction
injectTapEventPlugin();

const ROOT_ELEMENT = document.getElementById('root');
const BROWSER_HISTROY = createBrowserHistory();

const store = createStore(
  rootRreducers,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

// TODO: Must be updating Router
// https://github.com/yannickcr/eslint-plugin-react/issues/891
ReactDOM.render(
  <Provider store={store}>
    <Router children={Routes} history={BROWSER_HISTROY}/>
  </Provider>,
  ROOT_ELEMENT
);
