import * as StyledMinimal from '../src';

describe('StyledMinimal', () => {
  it('should export all components', () => {
    expect(StyledMinimal).toMatchSnapshot();
  });
});
