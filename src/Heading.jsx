import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px, spacer } from './utils/helpers';
import { baseStyles, headingPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const Heading = styled(Box)(props => {
  const { fontFamily, fontSize, fontWeight, lineHeight, gutterBottom, mb, mt } = props;
  const headingWeight = getTheme(props, 'headingWeight');
  const headingSize = getTheme(props, 'headingSizes', { key: ['size', 'as'], base: 'h1' });
  const marginTop = gutterBottom ? spacer(3) : 0;

  return css`
    font-size: ${px(fontSize || headingSize)};
    font-family: ${fontFamily || 'inherit'};
    font-weight: ${fontWeight || headingWeight};
    line-height: ${lineHeight || baseStyles.lineHeight};
    margin-bottom: ${isDefined(mb) ? px(mb) : marginTop};
    margin-top: ${isDefined(mt) ? px(mt) : spacer(3)};

    &:first-child {
      margin-top: ${isDefined(mt) ? px(mt) : 0};
    }
  `;
});

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: headingPropTypes,
  children: PropTypes.node.isRequired,
  gutterBottom: PropTypes.bool,
  /** element size */
  size: headingPropTypes,
  ...basePropTypes,
};

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
