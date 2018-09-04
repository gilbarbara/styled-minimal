import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import system from 'system-components';

import { FormStyles } from './utils/system';

export const StyledLegend = styled(system({
  is: 'legend',
}, 'fontSize', 'fontWeight', 'space'))`
  ${FormStyles.legend};
`;

const Legend = ({ children, ...props }) => (
  <StyledLegend {...props}>{children}</StyledLegend>
);

Legend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Legend;
