import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withComponent } from './utils/helpers';
import { FlexStyles } from './utils/system';

export const StyledFlex = styled.div`
  ${FlexStyles.base};
`;

StyledFlex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withComponent(StyledFlex, 'Flex');
