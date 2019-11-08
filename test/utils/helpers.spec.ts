import {
  getColor,
  getContrastedColor,
  getDarkColor,
  getDimmerColor,
  getProps,
  getTextColor,
  getTheme,
  getYiq,
  isBoolean,
  isDefined,
  isNumber,
  isNumericString,
  mergeTheme,
  px,
  responsive,
  spacer,
} from '../../src/utils/helpers';

describe('helpers', () => {
  describe('getColor', () => {
    it('should return the fallback', () => {
      expect(getColor({}, 'secondary')).toMatchSnapshot();
    });

    it('should return the variant', () => {
      expect(getColor({ variant: 'blue' })).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getColor()).toMatchSnapshot();
    });
  });

  describe('getContrastedColor', () => {
    it('should return properly', () => {
      expect(getContrastedColor('#ff0044', '#999')).toMatchSnapshot();
      expect(getContrastedColor('#000', '#333')).toMatchSnapshot();
      expect(getContrastedColor('#000', '#fff')).toMatchSnapshot();
    });
  });

  describe('getDarkColor', () => {
    it('should return properly', () => {
      expect(getDarkColor({})).toMatchSnapshot();
      expect(getDarkColor({ variant: 'blue' })).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getDarkColor()).toMatchSnapshot();
    });
  });

  describe('getDimmerColor', () => {
    it('should return properly', () => {
      expect(getDimmerColor('#fff')).toMatchSnapshot();
      expect(getDimmerColor('#ccc')).toMatchSnapshot();
      expect(getDimmerColor('#999')).toMatchSnapshot();
      expect(getDimmerColor('#666')).toMatchSnapshot();
      expect(getDimmerColor('#333')).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getDimmerColor()).toMatchSnapshot();
    });
  });

  describe('getProps', () => {
    it('should return properly', () => {
      expect(getProps({})).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getProps()).toMatchSnapshot();
    });
  });

  describe('getTextColor', () => {
    it('should return properly', () => {
      expect(getTextColor({ variant: 'yellow' })).toMatchSnapshot();
      expect(getTextColor({ variant: 'blue' })).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getTextColor()).toMatchSnapshot();
    });
  });

  describe('getTheme', () => {
    it('should return properly', () => {
      expect(getTheme({})).toMatchSnapshot();
      expect(getTheme({}, 'breakpoints')).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getTheme()).toMatchSnapshot();
    });
  });

  describe('getYiq', () => {
    it('should return properly', () => {
      expect(getYiq('#fff')).toMatchSnapshot();
      expect(getYiq('#f04')).toMatchSnapshot();
      expect(getYiq('#999')).toMatchSnapshot();
      expect(getYiq('#333')).toMatchSnapshot();
      expect(getYiq('#000')).toMatchSnapshot();
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(getYiq()).toMatchSnapshot();
    });
  });

  describe('isBoolean', () => {
    it('should should return properly', () => {
      expect(isBoolean({})).toBe(false);
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(isBoolean()).toBe(false);
    });
  });

  describe('isDefined', () => {
    it('should should return properly', () => {
      expect(isDefined({})).toBe(true);
      expect(isDefined('true')).toBe(true);
      expect(isDefined(1)).toBe(true);
      expect(isDefined(null)).toBe(true);
      expect(isDefined(undefined)).toBe(false);
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(isDefined()).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('should should return properly', () => {
      expect(isNumber({})).toBe(false);
      expect(isNumber('false')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(1)).toBe(true);
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(isNumber()).toBe(false);
    });
  });

  describe('isNumericString', () => {
    it('should should return properly', () => {
      expect(isNumericString({})).toBe(false);
      expect(isNumericString(null)).toBe(false);
      expect(isNumericString(undefined)).toBe(false);
      expect(isNumericString(1)).toBe(false);
      expect(isNumericString('1px')).toBe(false);
      expect(isNumericString('10rem')).toBe(false);
      expect(isNumericString('1')).toBe(true);
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(isNumericString()).toBe(false);
    });
  });

  describe('mergeTheme', () => {
    it('should should return properly', () => {
      expect(mergeTheme({ lineHeight: 2 })).toMatchSnapshot();
    });
  });

  describe('px', () => {
    it('should return properly', () => {
      expect(px(100)).toBe('100px');
      expect(px('10px')).toBe('10px');
      expect(px('10rem')).toBe('10rem');
    });

    it('should handle missing parameters', () => {
      // @ts-ignore
      expect(px()).toBe('0px');
    });
  });

  describe('responsive', () => {
    it('should return properly', () => {
      expect(
        responsive({
          _: { color: 'ccc' },
          md: { color: 'fff' },
          xd: { color: 'fff' },
          900: { bg: 'black', color: 'f04' },
          '100dx': { color: 'fff' },
          '100rem': { color: 'f04' },
        })({}),
      ).toMatchSnapshot();
    });
  });

  describe('spacer', () => {
    it('should should return properly', () => {
      expect(spacer(1)({})).toMatchSnapshot();
      // @ts-ignore
      expect(spacer(20)()).toMatchSnapshot();
    });
  });
});
