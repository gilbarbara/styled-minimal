// @flow
import deepmerge from 'deepmerge';
import { darken, getLuminance, lighten, opacify, parseToRgb, rgba } from 'polished';
import * as defaultTheme from './theme';

/** Check if a variable is defined **/
export const isDefined = (val: any): boolean %checks => typeof val !== 'undefined';

/** Check if a variable is a number **/
export const isNumber = (val: number | string): boolean %checks => typeof val === 'number';

/** Get textual unit value */
export const px = (val: string | number): string => (isNumber(val) ? `${val}px` : val);

/**
 *
 * @param {string|number} n
 * @param {Array} breakpoints
 * @returns {string}
 */
const createMediaQuery = (n: string | number, breakpoints: Object): string => {
  const grid = {
    'xs-only': `@media (min-width: ${breakpoints.ix - 1}px)`,
    ix: `@media (min-width: ${breakpoints.ix}px)`,
    'ix-only': `@media (max-width: ${breakpoints.md - 1}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    'md-only': `@media (max-width: ${breakpoints.lg - 1}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    'lg-only': `@media (max-width: ${breakpoints.xl - 1}px)`,
    xl: `@media (min-width: ${breakpoints.xl}px)`,
    'xl-only': `@media (max-width: ${breakpoints.xxl - 1}px)`,
    xxl: `@media (min-width: ${breakpoints.xxl}px)`,
  };

  if (isNumber(n)) {
    return `@media (min-width: ${px(n)})`;
  }

  return grid[n] || `@media (min-width: ${n})`;
};

/**
 * Merge ThemeProvides's theme with the default theme
 * @param {Object} props
 *
 * @returns {Object}
 */
export const mergeTheme = (props: Object = {}): Object => {
  const { theme = {} } = props;

  return deepmerge(defaultTheme, theme, { arrayMerge: (dest, source) => source });
};

/**
 * Get the merged theme
 */
export const getTheme = (props: Object, path?: string): any => {
  const theme = mergeTheme(props);

  return path ? theme[path] : theme;
};

/**
 * SC Helper to get parts of the theme.
 *
 * @param {string} path
 * @param {string} [key]
 * @returns {function(Object): *}
 */
export const getStyles = (path: string, key?: string): Function => (props: Object): any => {
  const styles = getTheme(props, path);

  return key ? styles[key] : styles;
};

/**
 * SC Helper to get the corresponding item from the space scale
 *
 * @param {number|string|Array} value
 * @param {boolean} [pure]
 *
 * @returns {function}
 */
export const spacer = (value: number | string | Array<number>, pure?: Boolean): any => (
  props: Object,
): any => {
  const { space } = getTheme(props);
  const result = space[value] || value;

  return pure ? result : px(result);
};

/**
 * SC Helper to generate responsive media queries
 *
 * @param {function|Object} input
 * @param {function} [queryBuilderFn]
 *
 * @returns {function}
 */
export const responsive = (input: Function | Object, queryBuilderFn?: Function): Function => (
  props: Object,
): string => {
  const { breakpoints } = getTheme(props);
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
 * Get color from theme
 *
 * @param {Object} props
 * @param {string} base
 *
 * @returns {string}
 */
export function getColor(props: Object, base: string = 'primary'): string {
  const { variant } = props;
  const { colors, palette } = getTheme(props);

  return palette[variant] || colors[variant] || palette[base];
}

export const getDimmerColor = (val: string): string => {
  try {
    const luminance = getLuminance(val);
    let dimmer = lighten(0.4, val);

    if (luminance > 0.7) {
      dimmer = darken(0.2, val);
    } else if (luminance > 0.2) {
      dimmer = lighten(0.2, val);
    } else if (luminance > 0.1) {
      dimmer = lighten(0.3, val);
    }

    return dimmer;
  } catch (error) {
    return val;
  }
};

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

export { darken, lighten, opacify, rgba };
