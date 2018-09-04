import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { FormStyles } from './utils/system';

export const StyledLabel =  styled(system({
  is: 'label',
}, 'fontSize', 'fontWeight', 'space'))`
  ${FormStyles.label};
`;

const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

export default Label;
