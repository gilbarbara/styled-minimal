import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { FormStyles } from './utils/system';

export const StyledLabel =  styled.label`
  ${FormStyles.label};
`;

StyledLabel.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
};

export default withComponent(StyledLabel, 'Label');
