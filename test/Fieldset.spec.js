import React from 'react';
import { mount } from 'enzyme';

import Fieldset from '../src/Fieldset';
import Legend from '../src/Legend';

describe('Fieldset', () => {
  const wrapper = mount(
    <Fieldset>
      <Legend>Title</Legend>
    </Fieldset>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
