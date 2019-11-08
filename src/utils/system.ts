import {
  css,
  CSSObject,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from 'styled-components';
import systemCSS from '@styled-system/css';

import {
  getColor,
  getDarkColor,
  getProps,
  getTextColor,
  getTheme,
  isDefined,
  px,
  responsive,
} from './helpers';
import { placeholder } from './mixins';
import { darken, desaturate, lighten } from './polished';
import { styleSystem } from './styles';

import { CommonProps, InputTypes } from '../types';

export const inputTextTypes: InputTypes[] = [
  'date',
  'email',
  'file',
  'number',
  'password',
  'search',
  'tel',
  'text',
];

export const baseStyles: CSSObject = {
  boxSizing: 'border-box',
};

export const colorStyles = (props: CommonProps): FlattenSimpleInterpolation => {
  const { dark, invert } = props;

  return css`
    color: ${invert || dark ? getColor(props) : getTextColor(props)};
  `;
};

export const lineHeightStyles = (props: CommonProps): number => getTheme(props, 'lineHeight');

export const variantStyles = (props: CommonProps): FlattenSimpleInterpolation => {
  const { dark, invert } = props;
  const { darkColor } = getTheme(props);
  const themeColor = getColor(props);

  const backgroundColor = invert ? 'transparent' : themeColor;
  const color = invert ? themeColor : getTextColor(props);

  return css`
    background-color: ${dark ? darkColor : backgroundColor};
    border: ${`1px solid ${dark ? darkColor : themeColor}`};
    color: ${dark ? getDarkColor(props) : color};
  `;
};

export const pseudoStyles = (
  props: CommonProps,
): FlattenInterpolation<ThemedStyledProps<any, any>> => {
  const {
    invert,
    outline,
    outlineColor,
    outlineOffset = 1,
    outlineStyle,
    outlineWidth,
    multiple,
    valid,
  } = props;
  const {
    backgroundColor,
    borderColor,
    color,
    disabledColor,
    requiredColor,
    validation,
  } = getTheme(props, 'input');

  const currentColor = color;
  let currentBorderColor = borderColor;

  if (valid) {
    currentBorderColor = validation.valid;
  } else if (valid === false) {
    currentBorderColor = validation.invalid;
  }

  const inputOnly = (): FlattenSimpleInterpolation | undefined => {
    let styles;

    /* istanbul ignore else */
    if (!isDefined(multiple)) {
      try {
        styles = css`
          ${placeholder(`color: ${lighten(0.5, currentColor)};`)};

          &:read-only {
            background-color: ${darken(0.02, backgroundColor)};
            color: ${lighten(0.3, currentColor)};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return styles;
  };

  const disabled = (): FlattenSimpleInterpolation | undefined => {
    let styles;

    /* istanbul ignore else */
    if (!isDefined(multiple)) {
      try {
        styles = css`
          ${placeholder(`color: ${lighten(0.5, currentColor)};`)};

          &:disabled {
            background-color: ${disabledColor};
            color: ${lighten(0.3, currentColor)};
            border-color: ${disabledColor};
          }
        `;
      } catch (error) {
        // what to do?
      }
    }

    return styles;
  };

  return css`
    ${inputOnly};
    ${disabled};
    ${placeholder(`color: ${lighten(0.5, currentColor)};`)};

    &:focus {
      ${outline ? `outline: ${outline}` : null};
      outline-color: ${outlineColor || (invert ? currentBorderColor : backgroundColor)};
      ${outlineOffset ? `outline-offset: ${px(outlineOffset)}` : null};
      ${outlineStyle ? `outline-style: ${outlineStyle}` : null};
      ${outlineWidth ? `outline-width: ${px(outlineWidth)}` : null};
    }

    &:required:not(:valid) {
      border-color: ${requiredColor};
      ${placeholder(`color: ${lighten(0.1, desaturate(0.2, requiredColor))};`)};
    }
  `;
};

export const sx = (props: any) => {
  const mergedProps = getProps(props);

  return {
    ...systemCSS(props.css)(mergedProps),
    ...responsive(props.responsive)(mergedProps),
  };
};
export const system = (props: any) => styleSystem(getProps(props));
