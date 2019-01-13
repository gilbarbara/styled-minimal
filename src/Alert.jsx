import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getTheme, isDefined, px } from './utils/helpers';
import { baseStyles, sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box, { basePropTypes } from './Box';

const Alert = styled(Box).attrs({
  role: 'alert',
})(props => {
  const { borderRadius: br, fontSize, lineHeight, size, width } = props;
  const { borderRadius, maxWidth, padding } = getTheme(props, 'alert');

  return css`
    ${baseStyles.variant};
    border-radius: ${px(isDefined(br) ? br : borderRadius)};
    font-size: ${fontSize || baseStyles.fontSize};
    line-height: ${lineHeight || baseStyles.lineHeight};
    max-width: ${px(maxWidth)};
    padding: ${px(padding[size][0])} ${px(padding[size][1])};
    width: ${width || '100%'};

    a {
      ${baseStyles.color};
    }
  `;
});

Alert.displayName = 'Alert';

Alert.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  outline: PropTypes.bool,
  /** button size */
  size: sizesAllPropTypes,
  /** button variant */
  variant: variantPropTypes,
  ...basePropTypes,
};

Alert.defaultProps = {
  outline: false,
  size: 'md',
  variant: 'primary',
};

export default Alert;
