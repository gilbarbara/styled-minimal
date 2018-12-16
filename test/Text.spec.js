import React from 'react';
import { mount } from 'enzyme';

import Text from '../src/Text';

describe('Text', () => {
  const wrapper = mount(
    <React.Fragment>
      <Text>Far far away, behind the word mountains, </Text>
      <Text>far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
    </React.Fragment>
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
