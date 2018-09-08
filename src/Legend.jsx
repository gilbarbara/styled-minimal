import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormStyles } from './utils/system';

export const StyledLegend = styled.legend`
  ${FormStyles.legend};
`;

const Legend = ({ children, ...props }) => (
  <StyledLegend {...props}>{children}</StyledLegend>
);

Legend.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Legend;
