import React from 'react';
import { mount } from 'enzyme';

import Label from '../src/Label';

describe('Label', () => {
  const wrapper = mount(<Label>Far far away</Label>);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
