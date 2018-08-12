// @flow
import { colors, palette } from '../styles';

export const defaults = {
  alignHorizontal: ['left', 'center', 'right'],
  buttonTypes: ['button', 'submit', 'reset'],
  headingSizes: ['', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  headingTypes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  variants: [...Object.keys(palette), ...Object.keys(colors)],
  weights: [
    'light',
    'normal',
    'medium',
    'bold',
  ],
};

export * from './helpers';
export * from './system';
