import React from 'react';
import { mount } from 'enzyme';

import List from '../src/List';

describe('List', () => {
  const wrapper = mount(
    <List>
      <li>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</li>
      <li>Morbi leo risus</li>
      <li>Porta ac consectetur ac</li>
      <li>Vestibulum at eros</li>
    </List>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
