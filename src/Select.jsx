import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { sizeType } from './utils/propTypes';
import { FormStyles } from './utils/system';

export const StyledSelect = styled.select`
  ${FormStyles.select};
  ${FormStyles.pseudo};
`;

StyledSelect.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.number,
  sizing: sizeType,
};

StyledSelect.defaultProps = {
  sizing: 'md',
};

export default withComponent(StyledSelect, 'Select');
