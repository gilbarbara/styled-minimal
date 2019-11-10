import * as React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Button, ButtonGroup } from '../src';

import { sizesOptionsAll, variants } from './__fixtures__/helpers';

export default {
  title: 'Components|ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const Basic = () => {
  const [active, setActive] = React.useState('two');

  const handleClick = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    if (target instanceof HTMLButtonElement) {
      setActive(target.dataset.name || '');
    }
  };

  return (
    <ButtonGroup
      size={select('Size', sizesOptionsAll, 'md')}
      variant={select('Variant', variants, 'primary')}
    >
      <Button invert={active !== 'one'} data-name="one" onClick={handleClick}>
        First
      </Button>
      <Button invert={active !== 'two'} data-name="two" onClick={handleClick}>
        Second
      </Button>
      <Button invert={active !== 'three'} data-name="three" onClick={handleClick}>
        Third
      </Button>
      <Button invert={active !== 'four'} data-name="four" onClick={handleClick}>
        Forth
      </Button>
    </ButtonGroup>
  );
};
