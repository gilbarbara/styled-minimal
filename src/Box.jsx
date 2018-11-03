import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BoxOptions } from './utils/system';

export const StyledBox = styled.div`
  ${BoxOptions.base};
`;

const Box = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  ...BoxOptions.propTypes,
};

export default Box;
