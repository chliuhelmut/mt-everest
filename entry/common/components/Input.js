import styled from 'styled-components';
import join from 'lodash/join';

export const basicInput = (extendStyles = {}, extendClassNames = []) => {
  const kInput = styled.input.attrs({
    className: `k-input ${join(extendClassNames, ' ')}`,
    style: extendStyles,
  })``;

  return kInput;
};
