import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import { sizesOptions } from './__fixtures__/helpers';

import { Table } from '../src';

export default {
  title: 'Components|Table',
  component: Table,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Table
    frame={boolean('Frame', false)}
    clean={boolean('Clean', false)}
    dark={boolean('Dark', false)}
    size={select('Size', sizesOptions, 'md')}
    head={select('Head Color', ['normal', 'light', 'dark'], 'normal')}
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
);
