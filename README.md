# styled-minimal

[![Build Status](https://travis-ci.org/gilbarbara/styled-minimal.svg?branch=master)](https://travis-ci.org/gilbarbara/styled-minimal) [![Dependencies](https://david-dm.org/gilbarbara/styled-minimal.svg)](https://david-dm.org/gilbarbara/styled-minimal) [![Maintainability](https://api.codeclimate.com/v1/badges/b3fbca883ccee4aab843/maintainability)](https://codeclimate.com/github/gilbarbara/styled-minimal/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/b3fbca883ccee4aab843/test_coverage)](https://codeclimate.com/github/gilbarbara/styled-minimal/test_coverage)

A React-based UI toolkit with [styled-components](https://www.styled-components.com/) and [styled-system](https://github.com/jxnblk/styled-system).

[**View the Storybook docs** ▸](https://gilbarbara.github.io/styled-minimal/?path=/docs/about-intro--page)

[**Try it out on CodeSandbox** ▸](https://codesandbox.io/s/k958nr9lno)

## Setup

```bash
npm i styled-minimal styled-components
```

## Import

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

## License

This project is made available under the MIT License.
