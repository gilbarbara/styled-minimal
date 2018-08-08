import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { reset } from './styles/index';
import { getProp } from './utils/helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: ${getProp('gutter')};
  ${reset}
`;

const Screen = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
