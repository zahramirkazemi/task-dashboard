import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Task Dashboard',
    favicon: './src/asset/image/fav-icon.svg',
  },
});
