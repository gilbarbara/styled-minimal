import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizeType } from './utils/propTypes';
import { FormStyles } from './utils/system';

export const StyledSelect = styled.select`
  ${FormStyles.select};
  ${FormStyles.pseudo};
`;

const Select = ({ children, ...props }) => (
  <StyledSelect {...props}>{children}</StyledSelect>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.number,
  sizing: sizeType,
};

Select.defaultProps = {
  sizing: 'md',
};

export default Select;
