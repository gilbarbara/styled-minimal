// @flow
import * as React from 'react';
import deepmerge from 'deepmerge';
import parseToRgb from 'polished/lib/color/parseToRgb';
import * as defaultTheme from './theme';

export function calcUnits(left: string, operator: string = '+', right: string | number): string {
  if (!left || !right) {
    return '';
  }

  const unit = /\d+(.*)/.exec(left);
  const leftNum = parseFloat(`${left}`.replace(/px|r?em/, ''));
  const rightNum = parseFloat(`${right}`.replace(/px|r?em/, ''));
  let result;

  switch (operator) {
    case '-':
      result = leftNum - rightNum;
      break;
    case '*':
      result = leftNum * rightNum;
      break;
    case '/':
      result = leftNum / rightNum;
      break;
    case '+':
    default:
      result = leftNum + rightNum;
      break;
  }

  return `${result}${unit ? unit[1] : ''}`;
}

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

  if (typeof toggle !== 'undefined') {
    isActive = props[toggle] || false;
  }

  if (!isActive) {
    return base;
  }

  if (key) {
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

export function withComponent(BaseComponent: any, displayName: string = ''): Function {
  const Component = (props) => React.createElement(BaseComponent, { ...props });
  Component.displayName = `${displayName}${typeof BaseComponent === 'function' ? 'Wrapper' : ''}`;

  return Component;
}
