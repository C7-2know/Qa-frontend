const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public", "../assets"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};

export default config;
