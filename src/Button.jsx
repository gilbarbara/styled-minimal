import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';

import { defaults, getProp, getYiq } from './utils/helpers';
import { colors, reset } from './styles/index';

const backgroundColor = props => {
  const { disabled, outline } = props;
  const colorProp = getProp('palette', { key: 'variant', base: 'primary' })(props);
  const baseColor = outline ? colors.white : colorProp;

  return disabled && !outline ? lighten(0.2, baseColor) : baseColor;
};

const border = props => {
  const { disabled, outline } = props;
  const colorProp = getProp('palette', { key: 'variant', base: 'primary' })(props);
  const baseColor = disabled ? lighten(0.3, colorProp) : colorProp;

  return (outline ? `1px solid ${baseColor}` : 0);
};

const color = props => {
  const { disabled, outline } = props;
  const colorProp = getProp('palette', { key: 'variant', base: 'primary' })(props);
  let baseColor = getYiq(colorProp) > 180 ? colors.black : colors.white;
  baseColor = outline ? colorProp : baseColor;

  return disabled ? lighten(0.3, baseColor) : baseColor;
};

const backgroundColorHover = props => {
  const { outline } = props;
  const colorProp = backgroundColor(props);

  if (outline) {
    return colorProp;
  }

  const yiq = getYiq(colorProp);

  if (yiq > 240) {
    return darken(0.1, colorProp);
  }

  return lighten(yiq < 50 ? 0.3 : 0.1, colorProp);
};

const colorHover = props => {
  const { outline } = props;
  const colorProp = color(props);

  if (!outline) {
    return colorProp;
  }

  const yiq = getYiq(colorProp);

  if (yiq < 40) {
    return lighten(0.5, colorProp);
  }

  return darken(0.2, colorProp);
};

const animation = props => {
  const { outline } = props;
  const animationProp = getProp('btnLoader', { toggle: 'animate' })(props);

  return animationProp && animationProp(outline ? '#ccc' : '#fff');
};

const outlineColor = props => {
  const { outline } = props;

  return outline ? color(props) : backgroundColor(props);
};

const Wrapper = styled.button`
  background-color: ${backgroundColor};
  border: ${border};
  border-radius: ${getProp('btnRadius', { key: 'size', base: 'md' })};
  box-shadow: none;
  color: ${color};
  cursor: pointer;
  display: inline-flex;
  font-family: ${getProp('fontFamily')};
  font-size: ${getProp('fontSizes', { key: 'size', base: 'md' })};
  font-weight: ${getProp('fontWeights', { key: 'weight', base: 'normal' })};
  line-height: ${getProp('btnLineHeight')};
  padding: 0;
  width: ${({ block }) => (block ? '100%' : 'auto')}
  ${animation};
  ${reset}
  
  &:disabled {
    pointer-events: none;
  }
  
  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }
  
  &:focus {  
    outline-color: ${outlineColor};
  }
  
  > * {
    display: flex;
    justify-content: center;
    padding: ${getProp('btnPadding', { key: 'size', base: 'md' })};
  }
  
  > a {
    color: ${color};
    text-decoration: none;
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
      <Wrapper {...props}>
        {React.isValidElement(children)
          ? children
          : <span>{children}</span>
        }
      </Wrapper>
    );
  }
}

export default Button;
