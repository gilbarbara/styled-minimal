import { addDecorator, configure } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { themes } from '@storybook/components';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withOptions({
    name: 'styled-minimal',
    url: 'https://github.com/gilbarbara/styled-minimal',
    theme: {
      ...themes.dark,
      mainBackground: '#27292a linear-gradient(to right, #27292a, #333)',
      brand: { background: '#f04' },
    },
  }),
);

addDecorator(
  withBackgrounds([
    { name: 'light', value: '#f7f7f7', default: true },
    { name: 'gray', value: '#999' },
    { name: 'dark', value: '#333' },
  ]),
);

addDecorator(
  withInfo({
    inline: true,
    source: false,
  }),
);

configure(loadStories, module);
