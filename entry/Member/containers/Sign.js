import {connect} from 'react-redux';
import styled from 'styled-components';

import colors from 'RootDir/generic/stylesheets/colors';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SignBack from '../components/SignBack';
import {logout, getProfile} from '../../Member/models/createActions';
import {isReady} from '../../common/models/createActions';

class Sign extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const self = this;
    window.onload = () => {
      self.checkedSignInStatus();
      this.props.dispatch(isReady());
    };
  }

  checkedSignInStatus() {
    this.props.dispatch(getProfile());
  }
  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <React.Fragment>
        <SignBack />
        <From>
          {this.props.user.isLogin?
            <button type='button' onClick={this.handleLogout.bind(this)}>Logout</button>
            :
            <React.Fragment>
              {this.props.common.isSignUpPage?
                <SignUp />:<SignIn />
              }
            </React.Fragment>
          }
        </From>
      </React.Fragment>
    );
  }
}

const From = styled.form.attrs({className: 'ui form'})`
  width: 420px;
  height: 700px;
  background-color: ${colors.white};
  padding: 30px 50px;
  border-radius: 5px;
  text-align: center;
`;

export default connect((state) => state)(Sign);
