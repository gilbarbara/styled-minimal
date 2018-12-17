import React from 'react';
import { mount } from 'enzyme';

import Link from '../src/Link';

describe('Link', () => {
  const wrapper = mount(<Link href="https://github.com">GitHub</Link>);

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
