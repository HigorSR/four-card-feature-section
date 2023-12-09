import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Red": "hsl(0, 78%, 62%)",
        "Cyan": "hsl(180, 62%, 55%)",
        "Orange": "hsl(34, 97%, 64%)",
        "Blue": "hsl(212, 86%, 64%)",

        "Very-Dark-Blue": "hsl(234, 12%, 34%)",
        "Grayish-Blue": "hsl(229, 6%, 66%)",
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}
export default config
