import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from '@storybook/addon-info';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addon-info
setDefaults({
  inline: true,
  source: false,
});

setOptions({
  name: 'styled-minimal',
  url: 'https://github.com/gilbarbara/styled-minimal',
});

configure(loadStories, module);
