import React from 'react'; //eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  alignContent,
  alignItems,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
} from 'styled-system';

import Box from './Box';

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  alignContent,
  alignItems,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...justifyContent.propTypes,
  ...Box.propTypes,
};

export default Flex;
