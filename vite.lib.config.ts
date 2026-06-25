import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/components', 'src/index.ts'],
      exclude: ['src/components/**/*.stories.ts'],
      insertTypesEntry: true,
    }),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ScenerDesignSystem',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
});
