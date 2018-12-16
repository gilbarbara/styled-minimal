import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const Screen = styled(Box)({});

Screen.displayName = 'Screen';

Screen.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
  ...Box.propTypes,
};

Screen.defaultProps = {
  minHeight: '100vh',
};

export default Screen;
