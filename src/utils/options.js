// @flow
import { colors, palette } from '../styles';

export const propsOptions = {
  sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
  variants: [...Object.keys(palette), ...Object.keys(colors)],
  weights: [
    'light',
    'normal',
    'medium',
    'bold',
  ],
};

export const inputTextTypes = [
  'date',
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
];
