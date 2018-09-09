import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CodeStyles } from './utils/system';

export const StyledCode = styled.code`
  ${CodeStyles.base};
`;

const Code = ({ children, ...props }) => (
  <StyledCode {...props}>{children}</StyledCode>
);

Code.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Code;