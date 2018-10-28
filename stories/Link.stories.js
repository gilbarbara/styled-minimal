import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { Link } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Link', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View skipSpacer>
      <Link
        title={text('Alt', 'Moon')}
        target={text('Height')}
        href={text('Source', 'https://assets.imgix.net/unsplash/moon.jpg')}
      >
        {text('Children', 'Moon')}
      </Link>
    </View>
  )));
