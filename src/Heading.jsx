import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { border, space, textAlign } from 'styled-system';

import { fontFamily, fontWeight, lineHeight } from './utils/system';
import { propsOptions } from './utils/options';
import { getProp } from './utils/helpers';

const base = css`
  ${border};
  ${fontFamily};
  ${fontWeight};
  ${lineHeight};
  margin: 0;
  ${space};
  ${textAlign};
`;

export const StyledElements = {
  h1: styled.h1`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h1' })};
    ${base}
  `,
  h2: styled.h2`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h2' })};
    ${base}
  `,
  h3: styled.h3`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h3' })};
    ${base}
  `,
  h4: styled.h4`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h4' })};
    ${base}
  `,
  h5: styled.h5`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h5' })};
    ${base}
  `,
  h6: styled.h6`
    font-size: ${getProp('headingSizes', { key: ['size', 'type'], base: 'h6' })};
    ${base}
  `,
};

const Heading = ({ children, type, ...props }) => {
  const Component = StyledElements[type];

  return (<Component {...props}>{children}</Component>);
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** element type */
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  type: 'h1',
};

export default Heading;
