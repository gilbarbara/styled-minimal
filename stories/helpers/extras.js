import { withBackgrounds } from '@storybook/addon-backgrounds';

export const backgroundAddon = withBackgrounds([
  { name: 'light', value: '#f7f7f7', default: true },
  { name: 'gray', value: '#999' },
  { name: 'dark', value: '#333' },
]);

export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
