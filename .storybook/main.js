module.exports = {
  "stories" : ["../src/**/*.stories.@(ts|tsx|js|jsxz)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss'
  ],
  "core": {
    "builder": "webpack5",
  },
}