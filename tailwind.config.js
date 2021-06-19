const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      colors: {
        orange: {
          '50':  '#fbf7f2',
          '100': '#fceee4',
          '200': '#f9dac4',
          '300': '#f7bc91',
          '400': '#f78f51',
          '500': '#ff6000',
          '550': '#e35600',
          '600': '#ed421b',
          '700': '#cd311e',
          '800': '#a52820',
          '900': '#84211e',
        },
        green: {
          '50':  '#f2f6f2',
          '100': '#dff0e2',
          '200': '#b4e7be',
          '300': '#78cc8a',
          '400': '#439e4a',
          '500': '#229333',
          '600': '#1d7d24',
          '700': '#1b601f',
          '800': '#144119',
          '900': '#0e2815',
        },
        gray: colors.warmGray
      },
      height: {
        "screen": "var(--app-height, 100vh)"
      },
      minHeight: {
        "screen": "var(--app-height, 100vh)"
      },
      boxShadow: {
        "search": "0 0 4px 0 rgba(0, 0, 0, .16)",
        "searchMobile": "0 1px 2px 0 rgba(0, 0, 0, .12)",
        "categoryCard": "0 8px 32px 0 rgba(238, 238, 238, 1)",
        "memberMenu": "0 2px 8px 0 rgba(72, 72, 72, .32)"
      },
      flex: {
        "full": "0 0 100%"
      },
      zIndex: {
        "100": 100,
      },
      keyframes: {
        slideButton: {
          "0%": {
            opacity: ".5",
            transform: "translateX(150px)"
          },
          "to": {
            opacity: "1",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        'slideButton': 'slideButton .15s ease-in-out',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1072px',
      'xl': '1220px'
    }
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
