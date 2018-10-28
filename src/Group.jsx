import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GroupStyles } from './utils/system';

export const StyledGroup = styled.div`
  ${GroupStyles.base};
`;

const Group = ({ children, ...rest }) => (
  <StyledGroup {...rest}>{children}</StyledGroup>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Group;
