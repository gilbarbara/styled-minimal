import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexStyles } from './utils/system';

export const StyledFlex = styled.div`
  ${FlexStyles.base};
`;

const Flex = ({ children, ...rest }) => (
  <StyledFlex {...rest}>{children}</StyledFlex>
);

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;
