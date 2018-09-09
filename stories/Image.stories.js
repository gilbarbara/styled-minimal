import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs/react';

import { Image } from '../src';
import { View } from './helpers/components';
import { backgroundAddon } from './helpers/extras';

storiesOf('Image', module)
  .addDecorator(backgroundAddon)
  .addDecorator(withKnobs)
  .add('default', withInfo({
    propTablesExclude: [View],
  })(() => (
    <View skipSpacer>
      <Image
        alt={text('Alt', 'Moon')}
        height={text('Height')}
        src={text('Source', 'https://assets.imgix.net/unsplash/moon.jpg')}
        textAlign={select('Text Align', ['left', 'center', 'right'], 'left')}
        width={text('Width')}
      />
    </View>
  )));
