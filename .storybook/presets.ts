const { resolve } = require('path');

module.exports = [
  '@storybook/addon-docs/preset',
  {
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: resolve(__dirname, '../tsconfig.json'),
        transpileOnly: true,
      },
      tsDocgenLoaderOptions: {
        propFilter: (prop: any) => {
          if (prop.parent) {
            return prop.parent.fileName.includes('/types/components');
          }
          return false;
        },
        shouldExtractLiteralValuesFromEnum: true,
        tsconfigPath: resolve(__dirname, '../tsconfig.json'),
      },
      forkTsCheckerWebpackPluginOptions: {
        colors: false,
      },
      include: [__dirname, resolve(__dirname, '../src'), resolve(__dirname, '../stories')],
    },
  },
];
