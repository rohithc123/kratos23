import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'void': {
          950: '#000000',
          900: '#141414',
          700: '#1e1e1e',
          500: '#404040',
          300: '#7D7D7D',
          200: '#DCDCDC',
        },
        'cherry': '#ED2E3C',
        'vinyl': '#FFCA41',
        
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // }
    },
  },
  plugins: [],
}
export default config
