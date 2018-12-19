import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, isDefined, px, themeGet } from './utils/helpers';
import { baseStyles, buttonPropTypes, sizesAllPropTypes, variantPropTypes } from './utils/system';

import Badge from './Badge';
import Box from './Box';

const styles = (props: Object): string => {
  const { animate, borderRadius: br, disabled, fontSize, lineHeight: lh, outline, size } = props;
  const { borderRadius, disabledOpacity, lineHeight, loader, padding } = themeGet(props, 'button');
  const fontSizeProp = themeGet(props, 'componentSizes', { key: 'size' });

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
    ${disabled && `opacity: ${disabledOpacity};`};
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
  }

  &:hover {
    transition: transform 0.2s;
    transform: scale(1.05);
  }

  &:focus {
    outline-color: ${getColor};
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
  ...Box.propTypes,
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
