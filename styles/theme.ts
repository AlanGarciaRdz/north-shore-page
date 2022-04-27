export const MainSectionsContainerCSS = {
  position: 'relative',
  '@xl': {
    padding: '0 146px 0 146px',
  },
};

export const MainSectionsMarginCSS = {
  marginTop: '$20',
  '@sm': {
    marginTop: '$20',
  },
  '@md': {
    marginTop: '$24',
  },
  '@lg': {
    marginTop: '$32',
  },
};

export const MainSectionContainerAndMarginCSS = {
  ...MainSectionsContainerCSS,
  ...MainSectionsMarginCSS,
};

const fonts = {
  sans: '"Work Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: '"Work Sans",Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
};

const fontSizes = {
  tiny: '.75rem',
  xs: '0.875rem',
  base: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '4rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const breakpoints = {
  xxs: '300px',
  xs: '650px',
  sm: '960px',
  md: '1280px',
  lg: '1400px',
  xl: '1920px',
};

const baseColors = {
  black: '#333333',
  white: '#FBFBFB',
  gray100: '#F6F6F6',
  gray200: '#E5E5E5',
  accents3: '#A0A0A0',
  selection: '#daaeea',
  primaryLight: '#FBFBFB',
  primary: '#333333',
  primaryDark: '#333333',
  secondaryLight: '#6190C4',
  secondary: '#508FC8',
  secondaryDark: '#096297',
  successLight: '#6ec293',
  success: '#17c964',
  successDark: '#009c22',
  warningLight: '#f7b955',
  warning: '#f5a623',
  warningDark: '#ab570a',
  errorLight: '#e85186',
  error: '#f21361',
  errorDark: '#e3001e',
  link: '#0070f3',
  cardHover: 'rgba(85, 52, 108, 0.95)',
  facebookColor: '#3b5999',
  instagramColor: '#e1306c',
  linkedinColor: '#0e76a8',
  googleColor: '#F65314',
  textGray: '#999999',
};

const lightColors = {
  ...baseColors,
  text: '#343433',
};

const darkColors = {
  ...baseColors,
  text: '#ffffff',
};

export const reactSelectorTheme = {
  primary: baseColors.secondary || 'transparent',
  primary75: baseColors.secondaryLight || 'transparent',
  primary50: baseColors.secondaryLight || 'transparent',
  primary25: baseColors.secondaryLight || 'transparent',
};

export default {
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  lightColors,
  darkColors,
};
