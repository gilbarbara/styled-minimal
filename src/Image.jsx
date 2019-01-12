import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Box from './Box';

const Image = styled(Box)(props => {
  const { maxWidth } = props;

  return css`
    max-width: ${maxWidth || '100%'};
  `;
});

Image.displayName = 'Image';

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  as: PropTypes.string,
  src: PropTypes.string.isRequired,
  ...Box.basePropTypes,
};

Image.defaultProps = {
  as: 'img',
};

export default Image;
