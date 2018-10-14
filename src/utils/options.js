// @flow
import { colors, palette } from './theme';

export const sizeOptions = ['sm', 'md', 'lg'];
export const sizeOptionsFull = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantOptions = [...Object.keys(palette), ...Object.keys(colors)];

export const inputTextOptions = [
  'date',
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
];
