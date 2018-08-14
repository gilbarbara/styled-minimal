import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fontFamily, fontSize, fontWeight, space, textAlign } from 'styled-system';
import { ListStyles } from './utils';

const base = css`
  ${ListStyles.border};
  ${ListStyles.borderRadius};
  ${ListStyles.display};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  margin: 0;
  ${ListStyles.padding};
  ${space};
  ${textAlign};
  ${ListStyles.styleType};
  
  > li {
    ${ListStyles.itemPadding}
  
    + li {
      ${ListStyles.itemBorder}
    }
  }
`;

export const StyledElements = {
  ul: styled.ul`
    ${base}
  `,
  ol: styled.ol`
    ${base}
  `,
};

const List = ({ children, element, ...props }) => {
  const Component = StyledElements[element] || StyledElements.ul;

  return (<Component element={element} {...props}>{children}</Component>);
};

List.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOf(['ul', 'ol']),
  inline: PropTypes.bool,
  reversed: PropTypes.bool,
  size: PropTypes.oneOfType(['sm', 'md', 'lg']),
  start: PropTypes.number,
  styleType: PropTypes.oneOfType([
    PropTypes.oneOf([
      'disc',
      'circle',
      'square',
      'decimal',
      'lower-alpha',
      'none',
    ]),
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['1', 'a', 'A', 'i', 'I']),
};

List.defaultProps = {
  bordered: false,
  element: 'ul',
  inline: false,
  size: 'md',
  start: '',
  styleType: 'none',
  type: '1',
};

export default List;
