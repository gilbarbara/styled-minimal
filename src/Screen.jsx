import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { ScreenStyles } from './utils/system';

export const StyledScreen = styled.div`
  ${ScreenStyles.base};
`;

StyledScreen.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.string,
};

StyledScreen.defaultProps = {
  minHeight: '100vh',
};

export default withComponent(StyledScreen, 'Screen');
