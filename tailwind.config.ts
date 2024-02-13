import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'auto 1fr auto',
      },

      maxWidth: {
        app: '700px',
      },
    },
  },
  plugins: [],
}
export default config
