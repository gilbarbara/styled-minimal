import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backgroundColor, border, color, defaults, getProp } from './utils';

const borderRadius = props => `border-radius: ${getProp('badgeBorderRadius')(props)}`;
const fontSize = props => `font-size: ${getProp('badgeFontSize')(props)}`;
const fontWeight = props => `font-weight: ${getProp('badgeFontWeight')(props)}`;
const padding = props => `padding: ${getProp('badgePadding')(props)}`;
const size = props => {
  const fontSizeProp = getProp('fontSizes', { key: 'size' })(props);
  return fontSizeProp ? `font-size: ${fontSizeProp}` : '';
};

export const StyledBadge = styled.span`
  align-items: center;
  ${backgroundColor};
  ${border};
  ${borderRadius};
  ${color};
  display: inline-flex;
  ${fontSize};
  ${size};
  ${fontWeight};
  line-height: 1;
  ${padding};
  vertical-align: baseline;
`;

const Badge = ({ children, ...props }) => (
  <StyledBadge {...props}>{children}</StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(defaults.sizes),
  variant: PropTypes.oneOf(defaults.variants),
};

export default Badge;
