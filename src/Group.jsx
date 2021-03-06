import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacer } from './utils/helpers';

import Box, { basePropTypes } from './Box';

const Group = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  > *:not(:first-child) {
    margin-left: ${spacer(2)};
  }
`;

Group.displayName = 'Group';

Group.propTypes = {
  children: PropTypes.node.isRequired,
  ...basePropTypes,
};

export default Group;
