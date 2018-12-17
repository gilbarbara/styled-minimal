import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { isDefined, px, spacer, themeGet } from './utils/helpers';
import { baseStyles, headingPropTypes } from './utils/system';

import Box from './Box';

const Heading = styled(Box)(props => {
  const { gutterBottom, mb, mt } = props;
  const headingWeight = themeGet(props, 'headingWeight');
  const headingSize = themeGet(props, 'headingSizes', { key: ['size', 'as'], base: 'h1' });
  const marginTop = gutterBottom ? spacer(3) : 0;

  return css`
    font-size: ${px(headingSize)};
    font-family: inherit;
    font-weight: ${headingWeight};
    line-height: ${baseStyles.lineHeight};
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
  ...Box.propTypes,
};

Heading.defaultProps = {
  as: 'h1',
};

export default Heading;
