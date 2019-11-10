import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';
import styled from 'styled-components';

const StyledExample = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  justify-content: center;
  margin: 0 auto;
  min-height: 50vh;

  > * {
    margin: 15px;
  }

  #root & {
    min-height: 100vh;
  }

  .sbdocs-content {
    font-family: Roboto, sans-serif;
  }
`;

const Example = ({ children, ...props }: any) => (
  <StyledExample {...props}>{children}</StyledExample>
);

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'light', value: '#f0f0f0' },
    { name: 'gray', value: '#999' },
    { name: 'dark', value: '#333' },
  ],
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'styled-minimal',
      brandUrl: 'https://github.com/gilbarbara/styled-minimal',
    }),
  },
});

addDecorator(withA11y);

const WrapperDecorator = (storyFn: () => void) => <Example>{storyFn()}</Example>;
addDecorator(WrapperDecorator);

configure(
  [
    require.context('../stories', true, /\.stories\.mdx$/),
    require.context('../stories', true, /\.stories\.tsx?$/),
  ],
  module,
);
