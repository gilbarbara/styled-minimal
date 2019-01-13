import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, getStyles, getTheme, isDefined, px } from './utils/helpers';
import {
  baseStyles,
  buttonPropTypes,
  outlines,
  sizesAllPropTypes,
  variantPropTypes,
} from './utils/system';

import Badge from './Badge';
import Box, { basePropTypes } from './Box';

const styles = (props: Object): string => {
  const { animate, borderRadius: br, fontSize, lineHeight: lh, outline, size } = props;
  const { borderRadius, lineHeight, loader, padding } = getTheme(props, 'button');
  const fontSizeProp = getTheme(props, 'componentSizes', { key: 'size' });

  return css`
    ${baseStyles.variant};
    align-items: center;
    border-radius: ${px(isDefined(br) ? br : borderRadius[size])};
    box-shadow: none;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    ${fontSizeProp ? `font-size: ${fontSize || fontSizeProp}` : ''};
    justify-content: center;
    line-height: ${lh || lineHeight};
    padding: ${px(padding[size][0])} ${px(padding[size][1])};
    text-decoration: none;
    width: ${({ block }) => (block ? '100%' : 'auto')};
    ${animate ? loader(outline ? '#ccc' : '#fff') : ''};
  `;
};

const Button = styled(Box)`
  ${styles};

  &:disabled {
    pointer-events: none;
    opacity: ${getStyles('button', 'disabledOpacity')};
  }

  &:focus {
    outline-color: ${getColor};
    ${outlines}
  }

  ${Badge} {
    margin-left: 5px;
  }
`;

Button.propTypes = {
  animate: PropTypes.bool,
  as: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  size: sizesAllPropTypes,
  type: buttonPropTypes,
  variant: variantPropTypes,
  ...basePropTypes,
};

Button.defaultProps = {
  animate: false,
  as: 'button',
  block: false,
  disabled: false,
  outline: false,
  size: 'md',
  type: 'button',
  variant: 'primary',
};

export default Button;
