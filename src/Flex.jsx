import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const Flex = styled(Box)({
  display: 'flex',
});

Flex.displayName = 'Flex';

Flex.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

Flex.defaultProps = {
  alignItems: 'center',
};

export default Flex;
