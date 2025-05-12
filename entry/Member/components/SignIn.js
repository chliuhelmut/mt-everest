import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import colors from 'RootDir/generic/stylesheets/colors';

import {basicLabel} from '../../common/components/Label';
import {basicInput} from '../../common/components/Input';
import {primaryBtn, basicBtn} from '../../common/components/Button';
import {withCenteredText} from '../../common/components/Hr';

import signinImg from 'RootDir/vendor/images/signin.svg';
import googleLogo from 'RootDir/vendor/images/google.svg';

import {login} from '../../Member/models/createActions';
import {switchSignPage} from '../../common/models/createActions';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  componentWillUnmount() {
    this.setState({email: '', password: ''});
  }

  handleChange(event) {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }
  handleGoogleLogin() {
    window.location.href = '/auth/google';
  }
  go2SignUp() {
    this.props.dispatch(switchSignPage('signup'));
  }

  async handleLogin() {
    const user = this.state;
    await this.props.dispatch(login(user));
  }

  render() {
    return (
      <React.Fragment>
        <Welcome2Kpm src={signinImg} />
        <Title>Sign in</Title>
        <Field>
          <KLabel htmlFor='email'>Account</KLabel>
          <KInput type='email' id='email' name='email' placeholder='Email'
            onChange={this.handleChange.bind(this)} />
          <CustomLabel htmlFor='password'>Password</CustomLabel>
          <KInput type='password' id='password' name='password' placeholder=''
            onChange={this.handleChange.bind(this)} />
          <KButton type='button' onClick={this.handleLogin.bind(this)}>Sign in</KButton>
          <HrWithSignIn data-content='OR' />
          <BasicBtn type='button' onClick={this.handleGoogleLogin.bind(this)}>
            <Google />
            Sign In With Google
          </BasicBtn>
          <NotMember>
            Not a member? <CustomLink onClick={this.go2SignUp.bind(this)}>Sign up now</CustomLink>
          </NotMember>
        </Field>
      </React.Fragment>
    );
  }
}

const KInput = basicInput();
const KLabel = basicLabel();
const KButton = primaryBtn({marginTop: '30px', width: '100%'});
const BasicBtn = basicBtn();
const HrWithSignIn = withCenteredText({marginTop: '100px'});

const Welcome2Kpm = styled.img`text-align: center;`;
const Title = styled.h1`font-size: 14px; margin-bottom: 40px;`;
const NotMember = styled.div`margin-top: 20px; font-size: 12px;`;
const CustomLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${colors.blue};
`;
const Google = styled.div`
  background-image: url(${googleLogo});
  background-repeat: no-repeat;
  height: 0.8rem;
  width: 0.8rem;
  display: inline-block;
  background-size: cover;
  margin-right: 10px;
`;

const CustomLabel = styled(KLabel)`margin-top: 20px !important;`;
const Field = styled.div.attrs({className: 'field'})``;

export default withRouter(connect((state) => state)(SignIn));
