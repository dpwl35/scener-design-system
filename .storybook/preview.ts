import type { Preview } from '@storybook/web-components-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/styles/global.scss';
import '../src/styles/storybook.scss';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        dark: 'dark',
        light: 'light',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
