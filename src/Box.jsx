import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { BoxStyles } from './utils/system';

export const StyledBox = styled.div`
  ${BoxStyles.base};
`;

StyledBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(StyledBox, 'Box');
