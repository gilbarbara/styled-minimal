import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getProp } from '../utils/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: ${getProp('gutter')};
`;

const Path = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Path.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Path;
