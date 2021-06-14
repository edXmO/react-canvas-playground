module.exports = {
  "stories": [
    "./src/stories/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-postcss'
  ],
  "core": {
    "builder": "webpack5",
  },
}