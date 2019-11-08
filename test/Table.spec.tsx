import * as React from 'react';
import { render } from '@testing-library/react';

import { Table } from '../src/Table';

const Fixture = props => (
  <Table {...props}>
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

describe('Table', () => {
  it('should render a basic Table', () => {
    const { container } = render(<Fixture head="dark" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Table with props', () => {
    const { container } = render(<Fixture clean striped />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
