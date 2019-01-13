import { withBackgrounds } from '@storybook/addon-backgrounds';
import { colors, palette } from '../../src/utils/theme';

export const backgroundAddon = withBackgrounds([
  { name: 'light', value: '#f7f7f7', default: true },
  { name: 'gray', value: '#999' },
  { name: 'dark', value: '#333' },
]);

export const sizesOptions = ['sm', 'md', 'lg'];
export const sizesAllOptions = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantOptions = [...Object.keys(palette), ...Object.keys(colors)];

export const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
