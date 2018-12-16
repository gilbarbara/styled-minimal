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
        href={text('HREF', 'https://assets.imgix.net/unsplash/moon.jpg')}
        target={text('Target')}
      >
        {text('Children', 'Moon')}
      </Link>
    </View>
  ));
