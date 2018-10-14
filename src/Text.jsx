import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withTheme } from './utils/helpers';
import { TextStyles } from './utils/system';

export const StyledText = styled.span`
  ${TextStyles.base};
`;

StyledText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withTheme(StyledText, 'Text');
