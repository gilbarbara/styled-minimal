/* eslint-disable react/forbid-foreign-prop-types */
// @flow
import PropTypes from 'prop-types';
import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import { css } from 'styled-components';
import { cloneFunc, compose, propTypes, style } from 'styled-system';

import { getColor, getTheme, getYiq, isDefined, px } from './helpers';
import { placeholder } from './mixins';
import { colors as colorsTheme, palette } from './theme';

export const textTransform = style({
  prop: 'textTransform',
  cssProperty: 'textTransform',
  transformValue: px,
});

export const outlines = compose(
  style({
    prop: 'outline',
    key: 'outlines',
  }),
  style({
    prop: 'outlineColor',
    key: 'outlines',
  }),
  style({
    prop: 'outlineOffset',
    key: 'outlines',
  }),
  style({
    prop: 'outlineStyle',
    key: 'outlines',
  }),
  style({
    prop: 'outlineWidth',
    key: 'outlines',
  }),
);

outlines.propTypes = {
  outline: PropTypes.string,
  outlineColor: PropTypes.string,
  outlineOffset: cloneFunc(propTypes.numberOrString),
  outlineStyle: PropTypes.string,
  outlineWidth: cloneFunc(propTypes.numberOrString),
};

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
    const colors = getTheme(props, 'colors');
    const currentColor = getColor(props);

    let baseColor = getYiq(currentColor) > 180 ? colors.black : colors.white;
    baseColor = outline || dark ? currentColor : baseColor;

    return css`
      color: ${baseColor};
    `;
  },
  variant: (props: Object): string => {
    const { dark, outline } = props;
    const { colors, darkColor } = getTheme(props);
    const themeColor = getColor(props);

    const backgroundColor = outline ? colors.white : themeColor;
    const baseColor = getYiq(themeColor) > 180 ? colors.black : colors.white;
    let currentColor = outline ? themeColor : baseColor;

    if (dark) {
      const colorDiff = Math.abs(getYiq(darkColor) - getYiq(themeColor));
      currentColor = colorDiff > 40 ? themeColor : lighten(0.3, themeColor);
    } else if (outline) {
      const colorDiff = Math.abs(getYiq(backgroundColor) - getYiq(themeColor));
      currentColor = colorDiff > 50 ? themeColor : darken(0.2, themeColor);
    }

    return css`
      background-color: ${dark ? darkColor : backgroundColor};
      border: 1px solid ${dark && !outline ? darkColor : themeColor};
      color: ${currentColor};
    `;
  },
  fontSize: (props: Object) => getTheme(props, 'componentSizes', { key: 'size', base: 'md' }),
  lineHeight: (props: Object) => getTheme(props, 'lineHeight'),
};

export const formPseudo = (props: Object): string => {
  const {
    bg,
    borderColor: bc,
    bordered,
    color: cl,
    outline,
    outlineColor,
    outlineOffset = 1,
    outlineStyle,
    outlineWidth,
    multiple,
    valid,
  } = props;
  const { backgroundColor, borderColor, color, requiredColor, validation } = getTheme(
    props,
    'input',
  );

  const currentBgColor = bg || backgroundColor;
  const currentColor = cl || color;
  let currentBorderColor = bc || borderColor;

  if (valid) {
    currentBorderColor = validation.valid;
  } else if (valid === false) {
    currentBorderColor = validation.invalid;
  }

  const inputOnly = (): ?string => {
    let body;

    if (!isDefined(multiple)) {
      try {
        body = css`
          ${placeholder(`color: ${lighten(0.5, currentColor)};`)};

          &:read-only {
            background-color: ${darken(0.02, currentBgColor)};
            color: ${lighten(0.3, currentColor)};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return body;
  };
  const disabled = (): ?string => {
    let body;

    if (!isDefined(multiple)) {
      try {
        body = css`
          &:disabled {
            background-color: ${darken(0.05, currentBgColor)};
            color: ${lighten(0.2, currentColor)};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return body;
  };

  return css`
    ${inputOnly};
    ${disabled};

    &:focus {
      outline-color: ${bordered ? currentBorderColor : outlineColor || currentBgColor};
      ${outline ? `outline: ${outline}` : null};
      ${outlineOffset ? `outline-offset: ${px(outlineOffset)}` : null};
      ${outlineStyle ? `outline-style: ${outlineStyle}` : null};
      ${outlineWidth ? `outline-width: ${px(outlineWidth)}` : null};
    }

    &:required:not(:valid) {
      border-color: ${requiredColor};
      ${placeholder(`color: ${requiredColor};`)};
    }
  `;
};
