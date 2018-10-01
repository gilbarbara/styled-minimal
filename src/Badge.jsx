import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BadgeStyles } from './utils/system';
import { sizeFullType, variantType } from './utils/types';

export const StyledBadge = styled.span`
  ${BadgeStyles.base};
`;

const Badge = ({ children, ...props }) => (
  <StyledBadge {...props}>{children}</StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  size: sizeFullType,
  variant: variantType,
};

export default Badge;
