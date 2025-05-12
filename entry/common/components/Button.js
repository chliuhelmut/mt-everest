import styled from 'styled-components';
import join from 'lodash/join';

export const primaryBtn = (extendStyles = {}, extendClassNames = []) => {
  const primaryBtn = styled.button.attrs({
    className: `ui button primary ${join(extendClassNames, ' ')}`,
    style: extendStyles,
  })``;

  return primaryBtn;
};

export const basicBtn = (extendStyles = {}, extendClassNames = []) => {
  const basicBtn = styled.button.attrs({
    className: `ui button basic ${join(extendClassNames, ' ')}`,
    style: extendStyles,
  })``;

  return basicBtn;
};
