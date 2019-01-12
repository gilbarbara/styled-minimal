import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box from './Box';

export const StyledButtonGroup = styled(Box)`
  display: inline-flex;

  > button {
    + button {
      margin-left: -1px;
    }

    &:first-child {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }

    &:last-child {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
  }
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

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  size: sizesAllPropTypes,
  variant: variantPropTypes,
  ...Box.basePropTypes,
};

export default ButtonGroup;
