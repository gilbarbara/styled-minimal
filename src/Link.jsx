import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { LinkStyles } from './utils/system';

export const StyledLink = styled.a`
  ${LinkStyles.base};
`;

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default withTheme(StyledLink, 'Link');
