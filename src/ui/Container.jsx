import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { calcUnits, flex, grid, gutter } from '../utils/styles';

const extra = ({ variant }) => (flex[variant] || '');

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding-left: ${calcUnits(`${gutter} / 2`)};
  padding-right: ${calcUnits(`${gutter} / 2`)};
  position: relative;
  width: 100%;
  z-index: 10;
  
 ${extra}
    
  ${grid.md} {
    padding-left: ${gutter};
    padding-right: ${gutter};
  }
    
  ${grid.xl} {
    padding-left: ${calcUnits(`${gutter} * 2`)};
    padding-right: ${calcUnits(`${gutter} * 2`)};
  }
`;

const Container = ({ children, variant }) => (
  <Wrapper variant={variant}>{children}</Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Container;
