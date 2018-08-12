import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BadgeStyles, backgroundColor, border, color, defaults, lineHeight } from './utils';

export const StyledBadge = styled.span`
  align-items: center;
  ${backgroundColor};
  ${border};
  ${BadgeStyles.borderRadius};
  ${color};
  display: inline-flex;
  ${BadgeStyles.fontSize};
  ${BadgeStyles.size};
  ${BadgeStyles.fontWeight};
  ${lineHeight};
  ${BadgeStyles.padding};
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
