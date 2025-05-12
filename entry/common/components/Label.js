import styled from 'styled-components';
import join from 'lodash/join';

export const basicLabel = (extendStyles = {}, extendClassNames = []) => {
  const kLabel = styled.label.attrs({
    className: `k-label ${join(extendClassNames, ' ')}`,
    style: {
      marginBottom: '2px',
      ...extendStyles,
    },
  })``;

  return kLabel;
};
