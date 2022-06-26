module.exports = {
  content: [
    './src/**/*.{html,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F4EFDB",
        "secondary": "#EA4C29",
        "accent": "#D31D0F",
        "neutral": "#3D4451",
        "base-100": "#FFFFFF",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    },
    fontFamily: {
      'patrick': ["Patrick Hand", 'sans-serif'],
      'script': ["Bad Script",'sans-serif'],
    },
      fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#F4EFDB",
          "secondary": "#EA4C29",
          "accent": "#D31D0F",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
