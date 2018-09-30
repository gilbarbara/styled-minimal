import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonGroupStyles } from './utils/system';
import { propsOptions } from './utils/options';

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
  size: PropTypes.oneOf(propsOptions.sizes),
  variant: PropTypes.oneOf(propsOptions.variants),
};

export default ButtonGroup;
