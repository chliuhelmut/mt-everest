import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Logo = ({...props}) => (
  <LogoLink to='/' className="item">
    <LogoImg src='https://shaka.kaneoh.com/pictures/kaneoh_blue_no_gradient.svg' />
  </LogoLink>
);

const LogoLink = styled(Link)``;
const LogoImg = styled.img`
  width: 100%;
`;

export default Logo;
