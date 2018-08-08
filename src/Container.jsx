import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { calcUnits, containerLayout, grid, gutter, reset } from './styles/index';

const verticalPaddingProp = ({ verticalPadding }) => {
  if (verticalPadding) {
    return css`
      padding-bottom: ${calcUnits(gutter, '/', 2)};
      padding-top: ${calcUnits(gutter, '/', 2)};
      
      ${grid.md} {
        padding-bottom: ${gutter};
        padding-top: ${gutter};
      }
    `;
  }

  return '';
};

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: ${calcUnits(gutter, '/', 2)};
  padding-right: ${calcUnits(gutter, '/', 2)};
  position: relative;
  width: 100%;
  z-index: 10;
  ${reset}
  ${({ layout }) => (containerLayout[layout] || '')}
  ${verticalPaddingProp}

  ${grid.md} {
    padding-left: ${gutter};
    padding-right: ${gutter};
  }

  ${grid.xl} {
    padding-left: ${calcUnits(gutter, '*', 2)};
    padding-right: ${calcUnits(gutter, '*', 2)};
  }
`;

const Container = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['fullScreen']),
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
