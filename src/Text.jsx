import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borders, display, fontFamily, fontSize, fontWeight, space } from 'styled-system';

import { base } from './utils/system';

export const StyledText = styled.span`
  ${borders};
  ${display};
  ${base.fontFamily};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${space};
`;

const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
