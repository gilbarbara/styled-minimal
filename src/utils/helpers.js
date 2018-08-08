// @flow
import parseToRgb from 'polished/lib/color/parseToRgb';
import darken from 'polished/lib/color/darken';
import * as defaultTheme from '../styles';

export const defaults = {
  alignHorizontal: ['left', 'center', 'right'],
  alignVertical: ['top', 'middle', 'bottom'],
  buttonTypes: ['button', 'submit', 'reset'],
  headingSizes: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  headingTypes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  variants: [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'light',
    'dark',
    'white',
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'brown',
    'black',
  ],
  weights: [
    'light',
    'normal',
    'medium',
    'bold',
  ],
};

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
  const theme = {
    ...defaultTheme,
    ...props.theme,
  };
  const selection = theme[path];
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
