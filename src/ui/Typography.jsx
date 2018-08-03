import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { calcUnits, gutter } from '../utils/styles';

const Wrapper = styled.h1`
  margin-bottom: ${calcUnits(`${gutter} / 2`)};
  margin-top: 0;
`;

const Typography = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Typography;
