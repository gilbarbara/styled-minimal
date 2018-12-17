import React from 'react';
import { mount } from 'enzyme';

import Switch from '../src/Switch';

describe('Switch', () => {
  const wrapper = mount(<Switch name="toggle" value={true} variant="indigo" />);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
