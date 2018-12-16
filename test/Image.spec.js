import React from 'react';
import { mount } from 'enzyme';

import Image from '../src/Image';

describe('Image', () => {
  const wrapper = mount(
    <Image src="https://assets.imgix.net/unsplash/moon.jpg" alt="Moon" />
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
