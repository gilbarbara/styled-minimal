import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

export const StyledLegend = styled.legend`
  ${FormStyles.legend};
`;

const Legend = ({ children, ...rest }) => (
  <StyledLegend {...rest}>{children}</StyledLegend>
);

Legend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Legend;
