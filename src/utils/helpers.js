// @flow
import deepmerge from 'deepmerge';
import parseToRgb from 'polished/lib/color/parseToRgb';
import * as defaultTheme from './theme';

export const num = (n: number | string) => typeof n === 'number' && !isNaN(n);
export const px = (n: any) => (num(n) ? `${n}px` : n);

export const getValue = (value: any, key: ?string): any => {
  if (key && ['size'].includes(key)) {
    return px(value);
  }

  return value;
};

/**
 * Get Styles
 * @param {Object} props
 *
 * @returns {Object}
 */
export const getTheme = (props: Object = {}): Object => {
  const { theme = {} } = props;

  return deepmerge(defaultTheme, theme);
};

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */
/* eslint-disable react/destructuring-assignment */
export const themeGet = (props: Object, path: string, options: Object = {}): any => {
  const theme = getTheme(props);
  const { base, key, toggle } = options;
  const selection = theme[path];
  let isActive = true;

  if (!path) {
    return theme;
  }

  if (typeof toggle !== 'undefined') {
    isActive = props[toggle] || false;
  }

  if (!isActive) {
    return base;
  }

  if (key) {
    if (Array.isArray(key)) {
      const value = key
        .filter(d => !!props[d])
        .map(d => props[d])[0] || base;

      return selection[value];
    }

    return getValue(selection[props[key] || base], key);
  }

  return getValue(selection);
};

/**
 * Get Color from theme
 *
 * @param {Object} props
 * @param {string} base
 * @returns {*}
 */
export function getColor(props: Object, base: string = 'primary'): string {
  const { variant } = props;
  const colors = themeGet(props, 'colors');
  const palette = themeGet(props, 'palette');

  return palette[variant] || colors[variant] || palette[base];
}

/**
 * Color contrast
 *
 * @param {string} color
 * @returns {number}
 */
export function getYiq(color: string): number {
  const r = parseToRgb(color).red;
  const g = parseToRgb(color).green;
  const b = parseToRgb(color).blue;

  return (r * 299 + g * 587 + b * 114) / 1000;
}
