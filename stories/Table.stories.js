import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { sizesOptions } from '../src/utils/system';

import { Table } from '../src';
import { ViewCheckbox } from './helpers/components';

storiesOf('Table', module)
  .addParameters({
    info: { propTablesExclude: [ViewCheckbox] },
  })
  .addDecorator(withKnobs)
  .add('default', () => (
    <ViewCheckbox>
      <Table
        bordered={boolean('Bordered', false)}
        borderless={boolean('Borderless', false)}
        size={select('Size', sizesOptions, 'md')}
        head={select('Head Color', ['', 'light', 'dark'])}
        inverted={boolean('Inverted', false)}
        striped={boolean('Striped', false)}
      >
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </ViewCheckbox>
  ));
