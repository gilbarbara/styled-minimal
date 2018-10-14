import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizeTypeFull, variantType } from './utils/propTypes';
import { BadgeStyles } from './utils/system';

export const StyledBadge = styled.span`
  ${BadgeStyles.base};
`;

const Badge = ({ children, ...props }) => (
  <StyledBadge {...props}>{children}</StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  size: sizeTypeFull,
  variant: variantType,
};

export default Badge;
