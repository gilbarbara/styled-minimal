import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { sizeTypeFull, variantType } from './utils/propTypes';
import { BadgeStyles } from './utils/system';

export const StyledBadge = styled.span`
  ${BadgeStyles.base};
`;

StyledBadge.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  size: sizeTypeFull,
  variant: variantType,
};

export default withTheme(StyledBadge, 'Badge');
