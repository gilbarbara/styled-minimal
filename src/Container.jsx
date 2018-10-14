import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getTheme, withTheme } from './utils/helpers';
import { ContainerStyles } from './utils/system';
import { textAlignType } from './utils/propTypes';

const verticalPaddingStyles = (props) => {
  const { verticalPadding } = props;
  const { grid, gutter } = getTheme(props);

  if (verticalPadding) {
    return `
      padding-bottom: ${gutter[2]}px;
      padding-top: ${gutter[2]}px;
      
      ${grid.md} {
        padding-bottom: ${gutter[3]}px;
        padding-top: ${gutter[3]}px;
      }
    `;
  }

  return '';
};

const horizontalPadding = (props) => {
  const { grid, gutter } = getTheme(props);

  return `
    padding-left: ${gutter[2]}px;
    padding-right: ${gutter[2]}px;
    
    ${grid.md} {
      padding-left: ${gutter[3]}px;
      padding-right: ${gutter[3]}px;
    }
  `;
};

const layoutProp = props => {
  const { layout } = props;
  const { container } = getTheme(props);

  return container.layout[layout] || '';
};

export const StyledContainer = styled.div`
  ${layoutProp};
  ${ContainerStyles.base};
  ${horizontalPadding};
  ${verticalPaddingStyles};
`;

StyledContainer.propTypes = {
  children: PropTypes.node.isRequired,
  /** use the whole Screen */
  layout: PropTypes.oneOf(['flex', 'fullScreen']),
  textAlign: textAlignType,
  /** add padding top/bottom */
  verticalPadding: PropTypes.bool,
};

StyledContainer.defaultProps = {
  verticalPadding: false,
};

export default withTheme(StyledContainer, 'Container');
