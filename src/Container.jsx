import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import system from 'system-components';

import { ContainerStyles, systemGroups } from './utils/system';
import { calcUnits, getProp } from './utils/helpers';

const verticalPaddingStyles = (props) => {
  const { verticalPadding } = props;
  const gutter = getProp('gutter')(props);
  const grid = getProp('grid')(props);

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

const horizontalPadding = (props) => {
  const gutter = getProp('gutter')(props);
  const grid = getProp('grid')(props);

  return css`
    padding-left: ${calcUnits(gutter, '/', 2)};
    padding-right: ${calcUnits(gutter, '/', 2)};
    
    ${grid.md} {
      padding-left: ${gutter};
      padding-right: ${gutter};
    }
    
    ${grid.xl} {
      padding-left: ${calcUnits(gutter, '*', 2)};
      padding-right: ${calcUnits(gutter, '*', 2)};
    }
  `;
};

const layoutProp = props => {
  const { layout } = props;
  const containerLayout = getProp('containerLayout')(props);

  return containerLayout[layout] || '';
};

export const StyledContainer = styled(system(...systemGroups('layout', 'flex')))`
  ${layoutProp};
  ${ContainerStyles.base};
  ${horizontalPadding};
  ${verticalPaddingStyles};
`;

const Container = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['flex', 'fullScreen']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
