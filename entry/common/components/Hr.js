import styled from 'styled-components';
import join from 'lodash/join';

import colors from 'RootDir/generic/stylesheets/colors';

export const withCenteredText = (extendStyles = {}, extendClassNames = []) => {
  const withCenteredText = styled.hr.attrs({
    className: `${join(extendClassNames, ' ')}`,
    style: extendStyles,
  })`
    position: relative;
    outline: 0;
    border: 0;
    height: 1.5rem;
    line-height: 1rem;
    color: ${colors.lightGrey};

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background-color: ${colors.lightGrey};
    }

    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      padding: 0 .5em;
      color: #C8C8C8;
      background-color: #fcfcfa;
      margin: 3px 0;
    }
  `;

  return withCenteredText;
};
