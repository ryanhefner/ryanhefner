import { defineConfig } from 'vitest/config'

export default defineConfig({
  root: import.meta.dirname,
  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
})
