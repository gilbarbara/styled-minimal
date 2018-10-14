import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { ImageStyles } from './utils/system';

export const StyledImage = styled.img`
  ${ImageStyles.base};
`;

StyledImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default withComponent(StyledImage, 'Image');
