import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexOptions } from './utils/system';

export const StyledFlex = styled.div`
  ${FlexOptions.base};
`;

const Flex = ({ children, ...rest }) => (
  <StyledFlex {...rest}>{children}</StyledFlex>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  ...FlexOptions.propTypes,
};

export default Flex;
