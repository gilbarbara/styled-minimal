import React from 'react';
import { mount } from 'enzyme';

import Embed from '../src/Embed';

describe('Embed', () => {
  const wrapper = mount(
    <Embed>
      {`<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GNCd_ERZvZM"
          title="Them Changes"
          frameBorder="0"
          allowFullScreen
        />`}
    </Embed>,
  );

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
