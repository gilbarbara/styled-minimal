import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { defaults, getProp, getYiq } from './utils/helpers';
import { colors, reset } from './styles/index';

const backgroundColor = props => {
  const { outline } = props;
  const color = getProp('palette', { key: 'variant', base: 'primary' })(props);

  return (outline ? colors.white : color);
};

const border = props => {
  const { outline } = props;
  const colorProp = getProp('palette', { key: 'variant', base: 'primary' })(props);

  return (outline ? `1px solid ${colorProp}` : 0);
};

const color = props => {
  const { outline } = props;
  const colorProp = getProp('palette', { key: 'variant', base: 'primary' })(props);
  const baseColor = getYiq(colorProp) > 180 ? colors.black : colors.white;

  return (outline ? colorProp : baseColor);
};

const positionVertical = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

const Wrapper = styled.div`
  align-items: ${({ alignVertical }) => positionVertical[alignVertical]};
  background-color: ${backgroundColor};
  border: ${border};
  border-radius: ${getProp('alertBorderRadius')};
  color: ${color};
  display: flex;
  font-family: ${getProp('fontFamily')};
  font-size: ${getProp('fontSizes', { key: 'size', base: 'md' })};
  line-height: ${getProp('lineHeight')};
  max-width: ${getProp('alertMaxWidth')};
  padding: ${getProp('alertPadding', { key: 'size', base: 'md' })};
  width: 100%;
  ${reset}
`;

const Icon = styled.div`
  line-height: 1;
  margin-right: ${getProp('alertIconGutter')};
`;

const Content = styled.div`
  text-align: ${({ alignHorizontal }) => alignHorizontal};
`;

const Alert = ({ children, icon, onClick, ...props }) => (
  <Wrapper {...props} role="alert">
    {icon && <Icon>{icon}</Icon>}
    <Content {...props}>{children}</Content>
  </Wrapper>
);

Alert.propTypes = {
  alignHorizontal: PropTypes.oneOf(defaults.alignHorizontal),
  alignVertical: PropTypes.oneOf(defaults.alignVertical),
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  /** button size */
  size: PropTypes.oneOf(defaults.sizes),
  /** button variant */
  variant: PropTypes.oneOf(defaults.variants),
};

Alert.defaultProps = {
  alignHorizontal: 'left',
  alignVertical: 'middle',
  outline: false,
  size: 'md',
  variant: 'primary',
};

Alert.Content = Content;
Alert.Icon = Icon;

export default Alert;
