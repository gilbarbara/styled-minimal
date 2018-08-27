import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, fontSize, fontWeight } from 'styled-system';

import { FormStyles } from './utils/system';

export const StyledLabel = styled.label`
  ${FormStyles.label};
  ${fontSize};
  ${fontWeight};
  ${space};
`;

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

export default Label;
