// @flow
import { colors, palette } from '../styles';

export const sizeOptions = ['sm', 'md', 'lg'];
export const sizeFullOptions = ['xs', 'sm', 'md', 'lg', 'xl'];
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
