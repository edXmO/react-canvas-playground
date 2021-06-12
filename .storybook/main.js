
module.exports = {
  "stories": [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss'
  ],
  "core": {
    "builder": "webpack5",
  }
  // webpackFinal: (config) => {
  //   return { ...config, module: { ...config.module, rules: custom.module.rules } };
  // },
}