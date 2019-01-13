import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Link } from '../src';
import { variantOptions } from './helpers/extras';
import { Example } from './helpers/components';

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .add('default', () => (
    <Example>
      <Link
        href={text('HREF', 'https://unknown-link.com')}
        target={text('Target')}
        variant={select('Variant', variantOptions, 'primary')}
      >
        {text('Children', 'Moon')}
      </Link>
    </Example>
  ));
