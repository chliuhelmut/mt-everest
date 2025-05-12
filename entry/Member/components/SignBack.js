import {connect} from 'react-redux';
import styled from 'styled-components';

import colors from 'RootDir/generic/stylesheets/colors';

class SignBack extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.dispatch(getProfile());
  }

  render() {
    return (
      <Background isReady={this.props.common.isReady}>
        {this.props.common.isSignUpPage?
          <React.Fragment>
            <Title>Welcome!</Title>
            <SubTitle>Let’s get Started.</SubTitle>
          </React.Fragment>
          :
          <React.Fragment>
            <Title>Hello,</Title>
            <SubTitle>It’s good to see you back!</SubTitle>
          </React.Fragment>
        }
      </Background>
    );
  }
}

const Background = styled.div.attrs({className: 'ui grid centered active'})`
  width: 360px;
  height: 660px;
  border-radius: 5px 0 0 5px;
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center !important;
  flex-direction: column !important;
  transition: all 1s linear;
  margin-right: -400px;

  &.active {
    transform: ${(props) => props.isReady?'translateX(0px)':'translateX(300px)'};
  }
`;

const Title = styled.h2`
  color: ${colors.blue};
  font-size: 48px;
  font-weight: normal;
`;

const SubTitle = styled.h3`
  margin-top: 0.5rem;
  font-weight: normal;
  color: ${colors.blue};
`;

export default connect((state) => state)(SignBack);
