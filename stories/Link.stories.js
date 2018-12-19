import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Link } from '../src';
import { variantOptions } from '../src/utils/system';
import { View } from './helpers/components';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [View] },
  })
  .add('default', () => (
    <View>
      <Link
        href={text('HREF', 'https://unknown-link.com')}
        target={text('Target')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'Moon')}
      </Link>
    </View>
  ));
