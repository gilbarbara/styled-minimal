import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LinkStyles } from './utils/system';

export const StyledLink = styled.a`
  ${LinkStyles.base};
`;

const Link = ({ children, ...props }) => (
  <StyledLink {...props}>{children}</StyledLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
