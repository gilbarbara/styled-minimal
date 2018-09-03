import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { ButtonStyles } from './utils/system';
import { propsOptions } from './utils/options';

import { StyledBadge } from './Badge';

export const StyledButton = styled(system({ is: 'button' }))`
  ${ButtonStyles.base};
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }
  
  &:focus {  
      ${ButtonStyles.outlineColor};
  }
  
  ${StyledBadge} {
    margin-left: 5px;
  }
`;

class Button extends React.Component {
  static propTypes = {
    /** boolean indicating whether the button should render with an animation */
    animate: PropTypes.bool,
    /** match its parent width */
    block: PropTypes.bool,
    children: PropTypes.node.isRequired,
    /** boolean indicating whether the button should render as disabled */
    disabled: PropTypes.bool,
    /** callback on the click event */
    onClick: PropTypes.func,
    size: PropTypes.oneOf(propsOptions.sizes),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(propsOptions.variants),
    /** font weight */
    weight: PropTypes.oneOf(propsOptions.weights),
  };

  static defaultProps = {
    animate: false,
    block: false,
    disabled: false,
    size: 'md',
    type: 'button',
    variant: 'primary',
    weight: 'normal',
  };

  render() {
    const { children, ...props } = this.props;
    return (
      <StyledButton {...props}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
