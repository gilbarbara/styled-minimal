import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Button, ButtonGroup } from '../src';
import { sizesOptions, variantOptions } from './helpers/extras';

import { Example } from './helpers/components';

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      propTablesExclude: [Example, Button],
    },
  })
  .add('default', () => {
    class BTG extends React.Component {
      state = { active: 'two' };

      setActive = ({ target }) => {
        this.setState({ active: target.dataset.name });
      };

      render() {
        const { active } = this.state;

        return (
          <Example skipSpacer>
            <ButtonGroup
              size={select('Size', sizesOptions, 'md')}
              variant={select('Variant', variantOptions, 'primary')}
            >
              <Button
                dark={boolean('Dark', false)}
                bordered={active !== 'one'}
                data-name="one"
                onClick={this.setActive}
              >
                First
              </Button>
              <Button bordered={active !== 'two'} data-name="two" onClick={this.setActive}>
                Second
              </Button>
              <Button
                dark={boolean('Dark', false)}
                bordered={active !== 'three'}
                data-name="three"
                onClick={this.setActive}
              >
                Third
              </Button>
              <Button
                dark={boolean('Dark', false)}
                bordered={active !== 'four'}
                data-name="four"
                onClick={this.setActive}
              >
                Forth
              </Button>
            </ButtonGroup>
          </Example>
        );
      }
    }

    BTG.displayName = 'ButtonGroup';

    BTG.propTypes = ButtonGroup.propTypes;

    return <BTG />;
  });
