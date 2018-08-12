// @flow
import deepmerge from 'deepmerge';
import parseToRgb from 'polished/lib/color/parseToRgb';
import darken from 'polished/lib/color/darken';
import * as styles from '../styles';

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

// Color contrast
export function getYiq(color: string): number {
  const r = parseToRgb(color).red;
  const g = parseToRgb(color).green;
  const b = parseToRgb(color).blue;

  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function getReadableColor(color: string, threshold: number = 150): string {
  const yiq = getYiq(color);

  return yiq >= threshold ? darken(0.3, color) : color;
}

/**
 * Returns the value of `props[path]` or `defaultValue`
 * @example
 * const Button = styled.button`
 *  color: ${prop('color', 'red')};
 * `
 */
/* eslint-disable react/destructuring-assignment */
export const getProp = (path: string, options: Object = {}): any => (props) => {
  const { base, key, toggle } = options;
  const { theme = {} } = props;

  const selection = deepmerge(styles, theme || {})[path];
  let isActive = true;

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

    return selection[props[key] || base];
  }

  return selection;
};

export function getColor(props: Object, base: string = 'primary'): string {
  const { variant } = props;
  const colors = getProp('colors')(props);
  const palette = getProp('palette')(props);

  return palette[variant] || colors[variant] || palette[base];
}
