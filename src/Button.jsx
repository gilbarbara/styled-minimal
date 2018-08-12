import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backgroundColor, border, color, defaults, fontFamily, fontSize, fontWeight, getColor, getProp } from './utils';

import { StyledBadge } from './Badge';

const animation = props => {
  const { outline } = props;
  const animationProp = getProp('btnLoader', { toggle: 'animate' })(props);

  return animationProp && animationProp(outline ? '#ccc' : '#fff');
};
const borderRadius = props => `border-radius: ${getProp('btnRadius', { key: 'size', base: 'md' })(props)}`;
const lineHeight = props => `line-height: ${getProp('btnLineHeight')(props)}`;
const outlineColor = props => `outline-color: ${getColor(props)}`;
const padding = props => `padding: ${getProp('btnPadding', { key: 'size', base: 'md' })(props)}`;

export const StyledButton = styled.button`
  ${backgroundColor};
  ${border};
  ${borderRadius};
  box-shadow: none;
  ${color};
  cursor: pointer;
  display: inline-flex;
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  padding: 0;
  width: ${({ block }) => (block ? '100%' : 'auto')}
  ${animation};
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }
  
  &:focus {  
      ${outlineColor};
  }
  
  > * {
    align-items: center;
    display: flex;
    justify-content: center;
    ${padding};
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
    size: PropTypes.oneOf(defaults.sizes),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(defaults.variants),
    /** font weight */
    weight: PropTypes.oneOf(defaults.weights),
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
