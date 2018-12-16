import React from 'react';
import { mount } from 'enzyme';

import Box from '../src/Box';
import Flex from '../src/Flex';

describe('Flex', () => {
  const wrapper = mount(
    <Flex>
      <Box>Left</Box>
      <Box>Right</Box>
    </Flex>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
