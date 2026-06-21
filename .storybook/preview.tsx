import type { Preview } from '@storybook/react-vite'
import '../src/styles/global.scss'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'scener-dark',
      values: [
        { name: 'scener-dark', value: '#1C1C1C' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },

    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;