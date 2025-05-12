import {connect} from 'react-redux';
import styled from 'styled-components';

import {login, logout, getProfile} from '../models/createActions';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(getProfile());
  }

  handleChange(event) {
    let loginObj = {};
    loginObj[event.target.name] = event.target.value;

    this.setState(loginObj);
  }

  handleGoogleLogin() {
    window.location.href = '/auth/google';
  }

  async handleLogin() {
    const user = this.state;
    const result = await this.props.dispatch(login(user));

    if (result && !result.type.match(/FAILED$/)) {
      this.setState({email: '', password: ''});
    }
  }

  handleProfile() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        {this.props.user.isLogin?
          <LoginForm>
            <Btn type='button' onClick={this.handleProfile.bind(this)}>Logout</Btn>
          </LoginForm>
          :
          <LoginForm>
            <FormField>
              <label htmlFor="email">Email: {this.props.user.isLogin}</label>
              <input id="email" name="email" type="email" placeholder='email'
                value={this.state.email} onChange={this.handleChange.bind(this)}
              />
            </FormField>
            <FormField>
              <label htmlFor="password">Password: </label>
              <input id="password" name="password" type="password" placeholder='password'
                value={this.state.password} onChange={this.handleChange.bind(this)}
              />
            </FormField>
            <Btn type='button' onClick={this.handleLogin.bind(this)}>Login</Btn>
            <Btn type='button' onClick={this.handleGoogleLogin.bind(this)}>Google Login</Btn>
          </LoginForm>
        }

        <p>Username: {this.props.user.profile.username}</p>
      </div>
    );
  }
}

const LoginForm = styled.form.attrs({
  className: 'ui form',
})`
  margin: 20px;
`;

const FormField = styled.div.attrs({
  className: 'field',
})``;

const Btn = styled.button.attrs({
  className: 'ui button',
})``;

export default connect((state) => state)(Login);
