import addonBackgrounds from '@storybook/addon-backgrounds';

export const backgroundAddon = addonBackgrounds([
  { name: 'light', value: '#f7f7f7', default: true },
  { name: 'gray', value: '#999' },
  { name: 'dark', value: '#333' },
]);
