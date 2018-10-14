import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { GroupStyles } from './utils/system';

export const StyledGroup = styled.div`
  ${GroupStyles.base};
`;

StyledGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withComponent(StyledGroup, 'Group');
