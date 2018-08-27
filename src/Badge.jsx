import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BadgeStyles, backgroundColor, border, color, lineHeight } from './utils/system';
import { propsOptions } from './utils/options';

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
  size: PropTypes.oneOf(propsOptions.sizes),
  variant: PropTypes.oneOf(propsOptions.variants),
};

export default Badge;
