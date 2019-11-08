import { colorStyles, variantStyles, sx, system } from '../../src/utils/system';

describe('colorStyles', () => {
  it('should return the proper color', () => {
    expect(colorStyles({ variant: 'secondary' })).toMatchSnapshot();
    expect(colorStyles({ variant: 'yellow' })).toMatchSnapshot();
    expect(colorStyles({ variant: 'not-valid' })).toMatchSnapshot();
  });
});

describe('variantStyles', () => {
  it('should return the proper styles', () => {
    expect(variantStyles({ variant: 'secondary' })).toMatchSnapshot();
    expect(variantStyles({ variant: 'yellow' })).toMatchSnapshot();
    expect(variantStyles({ variant: 'not-valid' })).toMatchSnapshot();
  });
});

describe('sx', () => {
  it('should handle the css prop', () => {
    expect(
      sx({
        css: {
          bg: '#000',
          color: ['#f04', '#999'],
          '&:hover': { color: '#333' },
        },
      }),
    ).toMatchSnapshot();
  });

  it('should handle the responsive prop', () => {
    expect(
      sx({
        responsive: {
          _: {
            color: '#ccc',
          },
          md: {
            color: '#999',
          },
        },
      }),
    ).toMatchSnapshot();
  });
});

describe('system', () => {
  it('should handle props', () => {
    expect(
      system({ color: { _: '#333', sm: '#000' }, fontSize: [20, 22], fontWeight: '#f04' }),
    ).toMatchSnapshot();
  });
});
