import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ContainerStyles } from './utils/system';
import { textAlignType } from './utils/types';
import { getStyles } from './utils/helpers';

const verticalPaddingStyles = (props) => {
  const { verticalPadding } = props;
  const { grid, gutter } = getStyles(props);

  if (verticalPadding) {
    return `
      padding-bottom: ${gutter[1]};
      padding-top: ${gutter[1]};
      
      ${grid.md} {
        padding-bottom: ${gutter[2]};
        padding-top: ${gutter[2]};
      }
    `;
  }

  return '';
};

const horizontalPadding = (props) => {
  const { grid, gutter } = getStyles(props);

  return `
    padding-left: ${gutter[1]};
    padding-right: ${gutter[1]};
    
    ${grid.md} {
      padding-left: ${gutter[2]};
      padding-right: ${gutter[2]};
    }
  `;
};

const layoutProp = props => {
  const { layout } = props;
  const { containerLayout } = getStyles(props);

  return containerLayout[layout] || '';
};

export const StyledContainer = styled.div`
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
  textAlign: textAlignType,
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
};

Container.defaultProps = {
  verticalPadding: false,
};

export default Container;
