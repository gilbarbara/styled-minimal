import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BoxStyles } from './utils/system';

export const StyledBox = styled.div`
  ${BoxStyles.base};
`;

const Box = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
