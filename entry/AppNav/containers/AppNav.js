import {connect} from 'react-redux';
import styled from 'styled-components';

import AppLogo from '../components/Logo';
import ItemsMenu from '../components/ItemsMenu';
import {leftItems, rightItems} from '../models/variables';

class AppBarContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar>
        <AppLogo />
        {leftItems.length > 0 &&
          leftItems.map((item, index) => <ItemsMenu key={index} item={item} />)
        }
        {rightItems.length > 0 &&
          <RightItemsMenu>
            {rightItems.map((item, index) => <ItemsMenu key={index} item={item} />)}
          </RightItemsMenu>
        }
      </AppBar>
    );
  }
}

const AppBar = styled.div.attrs({
  className: 'ui menu',
})`
  height: initial;
`;

const RightItemsMenu = styled.div.attrs({
  className: 'right menu',
})``;

export default (connect((state) => state)(AppBarContainer));
