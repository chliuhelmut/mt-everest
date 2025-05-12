import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Item = styled(Link)``;

class ItemsMenu extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
      <Item to={item.path} className='item'>
        {item.icon && <i className={item.icon} />}
        {item.name}
      </Item>
    );
  }
}

export default connect((state) => state)(ItemsMenu);
