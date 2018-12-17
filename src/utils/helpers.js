// @flow
import deepmerge from 'deepmerge';
import parseToRgb from 'polished/lib/color/parseToRgb';
import * as defaultTheme from './theme';

/** Check if a variable is defined **/
export const isDefined = (val: any): boolean %checks => typeof val !== 'undefined';

/** Check if a variable is a number **/
export const isNumber = (val: number | string): boolean %checks => typeof val === 'number';

/** Get textual unit value */
export const px = (val: string|number): string => (isNumber(val) ? `${val}px` : val);

const getValue = (value: any, key?: string): any => {
  if (key && ['size'].includes(key)) {
    return px(value);
  }

  return value;
};

/**
 *
 * @param {string|number} n
 * @param {Array} breakpoints
 * @returns {string}
 */
const createMediaQuery = (n: string | number, breakpoints: Array<number>): string => {
  const grid = {
    'xs-only': `@media (min-width: ${breakpoints[0] - 1}px)`,
    ix: `@media (min-width: ${breakpoints[0]}px)`,
    'ix-only': `@media (max-width: ${breakpoints[1] - 1}px)`,
    md: `@media (min-width: ${breakpoints[1]}px)`,
    'md-only': `@media (max-width: ${breakpoints[2] - 1}px)`,
    lg: `@media (min-width: ${breakpoints[2]}px)`,
    'lg-only': `@media (max-width: ${breakpoints[3] - 1}px)`,
    xl: `@media (min-width: ${breakpoints[3]}px)`,
    'xl-only': `@media (max-width: ${breakpoints[4] - 1}px)`,
    xxl: `@media (min-width: ${breakpoints[4]}px)`,
  };

  if (isNumber(n)) {
    return `@media (min-width: ${px(n)})`;
  }

  return grid[n] || `@media (min-width: ${n})`;
};

/**
 * Get Styles
 * @param {Object} props
 *
 * @returns {Object}
 */
export const getTheme = (props: Object = {}): Object => {
  const { theme = {} } = props;

  return deepmerge(defaultTheme, theme, { arrayMerge: (dest, source) => source });
};

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */
/* eslint-disable react/destructuring-assignment */
export const themeGet = (props: Object, path?: string, options: Object = {}): any => {
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
 * Get the space from its scale
 *
 * @param {number|string|Array} value
 * @param {boolean} [pure]
 *
 * @returns {function}
 */
export const spacer = (value: number | string | Array<number>, pure?: Boolean): any => (props: Object): any => {
  const { space } = themeGet(props);
  const result = space[value] || value;

  return pure ? result : px(result);
};

/**
 * Generate responsive media queries
 *
 * @param {function|Object} input
 * @param {function} [queryBuilderFn]
 *
 * @returns {function}
 */
export const responsive = (input: Function | Object, queryBuilderFn?: Function): Function => (props: Object): string => {
  const { breakpoints } = themeGet(props);
  const rules = typeof input === 'function' ? input(props) : input;
  const queryBuilder = queryBuilderFn || createMediaQuery;
  const result = [];

  for (const rule in rules) {
    /* istanbul ignore else */
    if ({}.hasOwnProperty.call(rules, rule)) {
      result.push(`
        ${queryBuilder(rule, breakpoints)} {
          ${rules[rule]}
        }
      `);
    }
  }

  return result.join('\n');
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
