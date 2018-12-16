import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

export const Text = styled(Box)({});

Text.displayName = 'Text';

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

Text.defaultProps = {
  as: 'span',
};

export default Text;
