import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'LightPink': 'hsl(275, 100%, 97%)',
        'GrayishPurple': 'hsl(292, 16%, 49%)',
        'DarkPurple': 'hsl(292, 42%, 14%)'
      },
        fontFamily: {
        'boldFont': "WorkSans-Bold",
        'semiBoldFont': "WorkSans-SemiBold",
        'regularFont': "WorkSans-Regular",
      },
    },
  },
  plugins: [],
}
export default config
