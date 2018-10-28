import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextStyles } from './utils/system';

export const StyledText = styled.span`
  ${TextStyles.base};
`;

const Text = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
