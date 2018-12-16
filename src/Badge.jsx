import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { baseStyles, sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box from './Box';

export const Badge = styled(Box)`
  ${(props: Object): string => {
    const {
      borderRadius,
      fontSize,
      fontWeight,
      padding,
    } = themeGet(props, 'badge');
    const fontSizeProp = themeGet(props, 'componentSizes', { key: 'size' });

    return css`
      ${baseStyles.variant};
      border-radius: ${px(borderRadius)};
      display: inline-flex;
      font-size: ${fontSize};
      ${fontSizeProp ? `font-size: ${fontSizeProp}` : ''};
      font-weight: ${fontWeight};
      line-height: 1;
      padding: ${px(padding[0])} ${px(padding[1])};
      vertical-align: baseline;
    `;
  }};
`;

Badge.displayName = 'Badge';

Badge.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  outline: PropTypes.bool,
  size: sizesAllPropTypes,
  variant: variantPropTypes,
  ...Box.propTypes,
};

Badge.defaultProps = {
  as: 'span',
};

export default Badge;
