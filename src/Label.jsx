import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

export const StyledLabel =  styled.label`
  ${FormStyles.label};
`;

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

Label.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

export default Label;
