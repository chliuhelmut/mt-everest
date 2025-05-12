// import ReactDOM from 'react-dom';
import {
  Route, Link,
} from 'react-router-dom';
// BrowserRouter as Router, Route, Link, Redirect, Switch, withRouter,

import Member from 'RootDir/entry/Member/components/Login';
import LandingPage from 'RootDir/entry/common/containers/layoutForLanding';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact
    render={(props) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

// const Main = () => <h2>Main</h2>;

const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({routes}) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </div>
);

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const routesConfig = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/sandwiches',
    component: Sandwiches,
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
  {
    path: '/member',
    component: Member,
  },
];

export default (
  <React.Fragment>
    {routesConfig.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
  </React.Fragment>
);
