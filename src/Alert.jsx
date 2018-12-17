import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { px, themeGet } from './utils/helpers';
import { baseStyles, sizesAllPropTypes, variantPropTypes } from './utils/system';

import Box from './Box';

const styles = (props: Object): string => {
  const { size } = props;
  const { borderRadius, maxWidth, padding } = themeGet(props, 'alert');

  return css`
    ${baseStyles.variant};
    border-radius: ${px(borderRadius)};
    font-size: ${baseStyles.fontSize};
    line-height: ${baseStyles.lineHeight};
    max-width: ${px(maxWidth)};
    padding: ${px(padding[size][0])} ${px(padding[size][1])};
    width: 100%;

    a {
      ${baseStyles.color};
    }
  `;
};

const Alert = styled(Box).attrs({
  role: 'alert',
})`
  ${styles};
`;

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
  ...Box.propTypes,
};

Alert.defaultProps = {
  outline: false,
  size: 'md',
  variant: 'primary',
};

export default Alert;
