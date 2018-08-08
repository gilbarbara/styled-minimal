import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { reset } from './styles/index';
import { defaults, getProp } from './utils/helpers';

const base = css`
  font-family: ${getProp('fontFamily')};
  line-height: ${getProp('lineHeight')};
  margin-bottom: ${getProp('gutterHeading', { toggle: 'gutterBottom', base: 0 })};
  margin-top: 0;
  ${reset}
`;

const elements = {
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
  const Component = elements[type] || elements.p;

  return (<Component {...props}>{children}</Component>);
};

Heading.propTypes = {
  /** Heading content */
  children: PropTypes.node.isRequired,
  /** element size */
  size: PropTypes.oneOf(defaults.headingSizes),
  /** element type */
  type: PropTypes.oneOf(defaults.headingTypes),
};

Heading.defaultProps = {
  type: 'h1',
};

export default Heading;