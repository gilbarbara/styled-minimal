import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Link } from '../src';
import { View } from './helpers/components';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View skipSpacer>
      <Link
        title={text('Alt', 'Moon')}
        target={text('Height')}
        href={text('Source', 'https://assets.imgix.net/unsplash/moon.jpg')}
      >
        {text('Children', 'Moon')}
      </Link>
    </View>
  ));
