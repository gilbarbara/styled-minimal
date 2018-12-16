import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, spacer, themeGet } from './utils/helpers';
import { baseStyles, headingPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { gutterBottom } = props;
  const headingWeight = themeGet(props, 'headingWeight');
  const headingSize = themeGet(props, 'headingSizes', { key: ['size', 'as'], base: 'h1' });

  return css`
    font-size: ${px(headingSize)};
    font-family: inherit;
    font-weight: ${headingWeight};
    line-height: ${baseStyles.lineHeight};
    margin: ${spacer(3)} 0 ${gutterBottom ? spacer(3) : 0};
    
    &:first-child {
      margin-top: 0;
    }
  `;
};

export const Heading = styled(Box)`
  ${styles};
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: headingPropTypes,
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: headingPropTypes,
  ...Box.propTypes,
};

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
