import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

import { StyledLegend } from './Legend';

export const StyledFieldset = styled.fieldset`
  ${FormStyles.fieldset};
  
  ${StyledLegend} {
    margin: 0;
  }
`;

const Fieldset = ({ children, ...rest }) => (
  <StyledFieldset {...rest}>{children}</StyledFieldset>
);

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

Fieldset.defaultProps = {
  inline: false,
};

export default Fieldset;
