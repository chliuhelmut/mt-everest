import {connect} from 'react-redux';
import styled from 'styled-components';

import Reception from '../components/reception';
import Sign from '../../Member/containers/Sign';

class LandingPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrap>
        <Reception />
        <Sign />
      </Wrap>
    );
  }
}

const Wrap = styled.div.attrs({className: 'landing-page'})`
  background: linear-gradient(to top right, #3888E7, #46BFE8);
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default connect((state) => state)(LandingPage);
