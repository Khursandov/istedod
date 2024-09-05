import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./test/**/*.{spec,test}.ts', './src/**/*.{spec,test}.ts'],
  },
})
