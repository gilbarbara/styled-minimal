# styled-minimal

[![Build Status](https://travis-ci.org/gilbarbara/styled-minimal.svg?branch=master)](https://travis-ci.org/gilbarbara/styled-minimal) [![Dependencies](https://david-dm.org/gilbarbara/styled-minimal.svg)](https://david-dm.org/gilbarbara/styled-minimal) [![Maintainability](https://api.codeclimate.com/v1/badges/b3fbca883ccee4aab843/maintainability)](https://codeclimate.com/github/gilbarbara/styled-minimal/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b3fbca883ccee4aab843/test_coverage)](https://codeclimate.com/github/gilbarbara/styled-minimal/test_coverage)

Minimal UI theme with [styled-components](https://www.styled-components.com/), [styled-system](https://github.com/jxnblk/styled-system) and [polished](https://github.com/styled-components/polished).

#### Demo

Storybook: [https://gilbarbara.github.io/styled-minimal/](https://gilbarbara.github.io/styled-minimal/)  
Sandbox: [https://k958nr9lno.codesandbox.io/](https://k958nr9lno.codesandbox.io/)

## Setup

```bash
npm i styled-minimal styled-components@beta
```

**Note:** styled-minimal is intended to be used with styled-components v4. Some features may not work with older versions.

```jsx
import { Box, Button, Container, Flex, Heading } from 'styled-minimal';

const MyComponent = () => {
  return (
    <Container>
      <Flex>
        <Heading>Hello</Heading>
        <Box mx="auto" />
        <Button>Click Me</Button>
      </Flex>
    </Container>
  );
};
```

## Theming

Wrap your app in a `ThemeProvider` and pass a [theme](./utils/theme.js) object.

For more information on Component props, read [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/api.md) API docs.

```jsx
import { ThemeProvider } from 'styled-components';
import { Container } from 'styled-minimal';

const theme = {
  button: {
    borderRadius: {
      xs: '2px',
      sm: '3px',
      md: '4px',
      lg: '6px',
      xl: '8px',
    },
  },
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128],
  breakpoints: [400, 560, 768, 1024, 1360, 1920],
  fontSizes: [12, 14, 16, 18, 22, 26, 32, 48],
};

const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container display="flex">...</Container>
    </ThemeProvider>
  );
};
```
