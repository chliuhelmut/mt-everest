import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import styled from 'styled-components';

import kaneohLogo from 'RootDir/vendor/images/kaneoh-logo.svg';
import kaneohText from 'RootDir/vendor/images/kaneoh-text.svg';
import kpmSlogan from 'RootDir/vendor/images/kpm-slogan.svg';

class Reception extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KpmLandingPage isReady={this.props.common.isReady}>
        <Welcome2Kpm src={kaneohLogo} />
        <Welcome2Kpm src={kaneohText} />
        <Welcome2Kpm src={kpmSlogan} />
      </KpmLandingPage>
    );
  }
}

const Welcome2Kpm = styled.img`
  margin: 0.5rem;
`;

const KpmLandingPage = styled.div.attrs({className: (props) => (props.isReady?'active':'')})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s linear;

  &.active {
    transform: translateX(-150px);
  }
`;


export default connect((state) => state)(Reception);
