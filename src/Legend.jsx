import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, fontSize, fontWeight } from 'styled-system';

import { FormStyles } from './utils/system';

export const StyledLegend = styled.legend`
  ${FormStyles.legend};
  ${fontSize};
  ${fontWeight};
  ${space};
`;

const Legend = ({ children, ...props }) => (
  <StyledLegend {...props}>{children}</StyledLegend>
);

Legend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Legend;
