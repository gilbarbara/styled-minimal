import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backgroundColor, border, ButtonStyles, color, fontFamily, fontSize, fontWeight } from './utils/system';
import { propsOptions } from './utils/options';

import { StyledBadge } from './Badge';

export const StyledButton = styled.button`
  ${backgroundColor};
  ${border};
  ${ButtonStyles.borderRadius};
  box-shadow: none;
  ${color};
  cursor: pointer;
  display: inline-flex;
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${ButtonStyles.lineHeight};
  padding: 0;
  width: ${({ block }) => (block ? '100%' : 'auto')}
  ${ButtonStyles.animation};
  
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
  
  > * {
    align-items: center;
    display: flex;
    justify-content: center;
    ${ButtonStyles.padding};
  }
  
  > a {
    ${color};
    text-decoration: none;
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
        {React.isValidElement(children)
          ? children
          : <span>{children}</span>
        }
      </StyledButton>
    );
  }
}

export default Button;
