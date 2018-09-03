import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BadgeStyles } from './utils/system';
import { propsOptions } from './utils/options';

export const StyledBadge = styled.span`
  ${BadgeStyles.base};
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
