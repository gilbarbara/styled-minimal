import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizeTypeFull, variantType } from './utils/propTypes';
import { BadgeStyles } from './utils/system';

export const StyledBadge = styled.span`
  ${BadgeStyles.base};
`;

const Badge = ({ children, ...rest }) => (
  <StyledBadge {...rest}>{children}</StyledBadge>
);

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  outline: PropTypes.bool,
  size: sizeTypeFull,
  variant: variantType,
};

export default Badge;
