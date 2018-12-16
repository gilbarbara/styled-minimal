/* eslint-disable react/forbid-foreign-prop-types */
// @flow
import PropTypes from 'prop-types';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { css } from 'styled-components';
import { style } from 'styled-system';

import { getColor, getYiq, px, themeGet } from './helpers';
import { placeholder } from './mixins';
import { colors as colorsTheme, palette } from './theme';

export const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
  transformValue: px,
});

export const sizesOptions = ['sm', 'md', 'lg'];
export const sizesAllOptions = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantOptions = [...Object.keys(palette), ...Object.keys(colorsTheme)];
export const inputTextTypes = [
  'date',
  'email',
  'file',
  'number',
  'password',
  'search',
  'tel',
  'text',
];

export const buttonPropTypes = PropTypes.oneOf(['button', 'submit', 'reset']);
export const headingPropTypes = PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
export const sizesPropTypes = PropTypes.oneOf(sizesOptions);
export const sizesAllPropTypes = PropTypes.oneOf(sizesAllOptions);
export const textAlignPropTypes = PropTypes.oneOf(['left', 'center', 'right', 'justify']);
export const variantPropTypes = PropTypes.oneOf(variantOptions);

export const baseStyles = {
  color: (props: Object): string => {
    const { dark, outline } = props;
    const colors = themeGet(props, 'colors');
    const selectedColor = getColor(props);

    let baseColor = getYiq(selectedColor) > 180 ? colors.black : colors.white;
    baseColor = outline || dark ? selectedColor : baseColor;

    return css`
      color: ${baseColor};
    `;
  },
  variant: (props: Object): string => {
    const { dark, outline } = props;
    const { colors, darkColor } = themeGet(props);
    const themeColor = getColor(props);

    const backgroundColor = outline ? colors.white : themeColor;
    const baseColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    let selectedColor = outline ? themeColor : baseColor;

    if (dark) {
      const colorDiff = Math.abs(getYiq(darkColor) - getYiq(themeColor));
      selectedColor = colorDiff > 40 ? themeColor : lighten(0.3, themeColor);
    }
    else if (outline) {
      const colorDiff = Math.abs(getYiq(backgroundColor) - getYiq(themeColor));
      selectedColor = colorDiff > 50 ? themeColor : darken(0.2, themeColor);
    }

    return css`
      background-color: ${dark ? darkColor : backgroundColor};
      border: 1px solid ${dark && !outline ? darkColor : themeColor};
      color: ${selectedColor};
    `;
  },
  fontSize: (props: Object) => themeGet(props, 'componentSizes', { key: 'size', base: 'md' }),
  lineHeight: (props: Object) => themeGet(props, 'lineHeight'),
};

export const formPseudo = (props: Object): string => {
  const { multiple } = props;
  const {
    backgroundColor: inputBgColor,
    color: inputColor,
    focusColor,
    requiredColor,
  } = themeGet(props, 'input');
  const inputOnly = typeof multiple === 'undefined'
    ? `
    ${placeholder(`color: ${lighten(0.5, inputColor)};`)};
    
    &:read-only {
      background-color: ${darken(0.02, inputBgColor)};
      color: ${lighten(0.3, inputColor)};
    }`
    : '';

  return css`
      ${inputOnly};
      
      &:disabled {
        background-color: ${darken(0.05, inputBgColor)};
        color: ${lighten(0.2, inputColor)};
      }
      
      &:focus {
        outline-color: ${focusColor};
      }
      
      &:required:not(:valid) {
        border-color: ${requiredColor};
        ${placeholder(`color: ${requiredColor};`)};
      }
    `;
};
