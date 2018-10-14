import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { FormStyles } from './utils/system';

import { StyledLegend } from './Legend';

export const StyledFieldset = styled.fieldset`
  ${FormStyles.fieldset};
  
  ${StyledLegend} {
    margin: 0;
  }
`;

StyledFieldset.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

StyledFieldset.defaultProps = {
  bordered: false,
  inline: false,
};

export default withComponent(StyledFieldset, 'Fieldset');
