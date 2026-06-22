import type { Preview, ReactRenderer } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import '../src/styles/global.scss';

const preview: Preview = {
  decorators: [
    (StoryFn, context) => {
      const currentTheme = context.globals.theme || 'dark';

      if (typeof window !== 'undefined') {
        // 현재 문서(미리보기 iframe)에 적용
        document.documentElement.setAttribute('data-theme', currentTheme);

        // 부모 문서(Storybook 매니저 UI)에도 적용
        if (window.parent && window.parent !== window) {
          try {
            window.parent.document.documentElement.setAttribute(
              'data-theme',
              currentTheme,
            );
          } catch (_e) {
            // Cross-origin 제약일 경우 무시
          }
        }
      }

      return StoryFn();
    },
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        dark: 'dark',
        light: 'light',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],

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
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    a11y: {
      test: 'todo',
    },
    options: {
      storySort: {
        order: [
          'GUIDE',
          ['Introduction', 'Color System', 'Publishing Guide'],
          'TOKENS',
          ['Color', 'Typography', 'Spacing'],
          'Components',
        ],
      },
    },
  },
};

export default preview;
