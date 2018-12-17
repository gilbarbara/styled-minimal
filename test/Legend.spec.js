import React from 'react';
import { mount } from 'enzyme';

import Legend from '../src/Legend';

describe('Legend', () => {
  const wrapper = mount(<Legend>Far far away</Legend>);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
