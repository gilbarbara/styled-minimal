import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles, sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const Badge = styled(Box)(props => {
  const { borderRadius: radii, fontSize: fz, fontWeight: fw, lineHeight } = props;
  const { borderRadius, fontSize, fontWeight, padding } = getTheme(props, 'badge');
  const fontSizeProp = getTheme(props, 'componentSizes', { key: 'size' });

  return css`
    ${baseStyles.variant};
    border-radius: ${px(isDefined(radii) ? radii : borderRadius)};
    display: inline-flex;
    font-size: ${fz || fontSize};
    ${fontSizeProp ? `font-size: ${fz || fontSizeProp}` : ''};
    font-weight: ${fw || fontWeight};
    line-height: ${lineHeight || 1};
    padding: ${px(padding[0])} ${px(padding[1])};
    vertical-align: baseline;
  `;
});

Badge.displayName = 'Badge';

Badge.propTypes = {
  as: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  size: sizesAllPropTypes,
  variant: variantPropTypes,
  ...basePropTypes,
};

Badge.defaultProps = {
  as: 'span',
  dark: false,
  bordered: false,
  size: 'md',
  variant: 'primary',
};

export default Badge;
