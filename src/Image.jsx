import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

export const Image = styled(Box)`
  max-width: 100%;
`;

Image.displayName = 'Image';

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  as: PropTypes.string,
  src: PropTypes.string.isRequired,
  ...Box.propTypes,
};

Image.defaultProps = {
  as: 'img',
};

export default Image;
