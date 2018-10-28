import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ImageStyles } from './utils/system';

export const StyledImage = styled.img`
  ${ImageStyles.base};
`;

const Image = ({ children, ...rest }) => (
  <StyledImage {...rest}>{children}</StyledImage>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Image;
