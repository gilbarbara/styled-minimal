import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { CodeStyles } from './utils/system';

export const StyledCode = styled.code`
  ${CodeStyles.base};
`;

StyledCode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(StyledCode, 'Code');
