import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { sizesOptions } from './helpers/extras';

import { Table } from '../src';
import { Example } from './helpers/components';

storiesOf('Table', module)
  .addParameters({
    info: { propTablesExclude: [Example] },
  })
  .addDecorator(withKnobs)
  .add('default', () => (
    <Example>
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
    </Example>
  ));
