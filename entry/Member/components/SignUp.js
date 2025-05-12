import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';

import colors from 'RootDir/generic/stylesheets/colors';

import {basicLabel} from '../../common/components/Label';
import {basicInput} from '../../common/components/Input';
import {primaryBtn} from '../../common/components/Button';
import {withCenteredText} from '../../common/components/Hr';

import {signup} from '../../Member/models/createActions';
import {switchSignPage} from '../../common/models/createActions';

import signupImg from 'RootDir/vendor/images/signup.svg';

class Sign extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', firstName: '', lastName: '', policy: false};
  }
  componentWillUnmount() {
    this.setState({email: '', password: '', firstName: '', lastName: '', policy: false});
  }

  go2SignIn() {
    this.props.dispatch(switchSignPage('signin'));
  }

  handleChange(event) {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }
  async handleSignUp() {
    const {email, password, firstName, lastName, policy} = this.state;
    await this.props.dispatch(signup({email, password, firstName, lastName, policy: (policy === 'on')}));

    // this.props.history.push('/Member');
  }

  render() {
    return (
      <React.Fragment>
        <Welcome2Kpm src={signupImg} />
        <Title>Sign up</Title>
        <Field>
          <Fields>
            <SignUpNameArea>
              <KLabel htmlFor='firstName'>First Name</KLabel>
              <KInput type='text' id='firstName' name='firstName' placeholder=''
                onChange={this.handleChange.bind(this)} value={this.state.firstName} />
            </SignUpNameArea>
            <SignUpNameArea>
              <KLabel htmlFor='lastName'>Last Name</KLabel>
              <KInput type='text' id='lastName' name='lastName' placeholder=''
                onChange={this.handleChange.bind(this)} value={this.state.lastName} />
            </SignUpNameArea>
          </Fields>

          <CustomLabel htmlFor='email'>Account</CustomLabel>
          <KInput type='email' id='email' name='email' placeholder='Email'
            onChange={this.handleChange.bind(this)} value={this.state.email} />

          <CustomLabel htmlFor='password'>Password</CustomLabel>
          <KInput type='password' id='password' name='password' placeholder=''
            onChange={this.handleChange.bind(this)} value={this.state.password} />

          <CheckboxArea>
            <input type='checkbox' id='policy' name='policy' defaultChecked={this.state.policy}
              onChange={this.handleChange.bind(this)}/>
            <label htmlFor='policy'>Creating an account means you’re okay with our Terms of Service,
              Privacy Policy, and our default Notification Settings.
            </label>
          </CheckboxArea>

          <KButton type='button' onClick={this.handleSignUp.bind(this)}>Create Account</KButton>

          <HrWithSignUp data-content='OR' />
          <HaveBeenMember>
            Have been a member? <Link onClick={this.go2SignIn.bind(this)}>Sign in now</Link>
          </HaveBeenMember>

        </Field>
      </React.Fragment>
    );
  }
}

const KInput = basicInput();
const KLabel = basicLabel();
const HrWithSignUp = withCenteredText({marginTop: '30px'});
const KButton = primaryBtn({
  marginTop: '30px',
  width: '100%',
});

const Link = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${colors.blue};
`;

const Welcome2Kpm = styled.img`text-align: center;`;
const Title = styled.h1`font-size: 14px; margin-bottom: 40px;`;
const HaveBeenMember = styled.div`margin-top: 20px; font-size: 12px;`;
const CustomLabel = styled(KLabel)`margin-top: 20px !important;`;
const Field = styled.div.attrs({className: 'field'})``;
const Fields = styled.div.attrs({className: 'fields'})`
  font-size: 12px;
  margin-bottom: 20px;

  & > div:first-child {
    margin-right: 5px;
  }
  & > div:last-child {
    margin-left: 5px;
  }
`;
const SignUpNameArea = styled.div`text-align: left;`;
const CheckboxArea = styled.div.attrs({className: 'ui checkbox'})`
  margin-top: 20px;

  & > input[type='checkbox'] ~ label {
    text-align: left;
    font-size: 9px;
    padding-left: 2rem;
  }
`;


export default connect((state) => state)(Sign);
