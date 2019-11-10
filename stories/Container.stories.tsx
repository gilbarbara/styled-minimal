import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Container, Heading, Paragraph } from '../src';

export default {
  title: 'Components|Container',
  component: Container,
  decorators: [withKnobs],
  subTitle: 'Content wrapper with responsive padding',
};

export const Basic = () => (
  <Container
    fullScreen={boolean('Full Screen', false)}
    ySpacing={boolean('Y Spacing', false)}
    bg="#000"
    textAlign="center"
  >
    <Heading color="#fff">Hello!</Heading>
    <Paragraph color="#fff">What is your name?</Paragraph>
  </Container>
);

export const FullScreen = () => (
  <Container fullScreen bg="#000">
    <Heading color="#fff">Hello!</Heading>
    <Paragraph color="#fff">What is your name?</Paragraph>
  </Container>
);
