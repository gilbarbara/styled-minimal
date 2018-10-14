import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { FormStyles } from './utils/system';

export const StyledLegend = styled.legend`
  ${FormStyles.legend};
`;

StyledLegend.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withComponent(StyledLegend, 'Legend');
