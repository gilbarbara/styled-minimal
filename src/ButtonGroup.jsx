import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { sizeTypeFull, variantType } from './utils/propTypes';
import { ButtonGroupStyles } from './utils/system';

export const StyledButtonGroup = styled.div`
  ${ButtonGroupStyles.base};
`;

const ButtonGroup = ({ children, size, variant, ...props }) => {
  const buttonProps = {};

  if (typeof size !== 'undefined') {
    buttonProps.size = size;
  }

  if (typeof variant !== 'undefined') {
    buttonProps.variant = variant;
  }

  return (
    <StyledButtonGroup {...props}>
      {React.Children.map(children, child => React.cloneElement(child, { ...buttonProps }))}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: sizeTypeFull,
  variant: variantType,
};

export default withTheme(ButtonGroup, 'ButtonGroup');
