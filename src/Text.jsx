import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box, { basePropTypes } from './Box';

const Text = styled(Box)({});

Text.displayName = 'Text';

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...basePropTypes,
};

Text.defaultProps = {
  as: 'span',
};

export default Text;
