export const MainSectionsContainerCSS = {
  position: 'relative',
  '@xl': {
    padding: '0 126px 0 126px',
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
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
};

const fontSizes = {
  tiny: '.75rem',
  xs: '0.875rem',
  base: '1rem',
  sm: '1.25rem',
  md: '1.5rem',
  lg: '2.25rem',
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
  gray100: '#F6F6F6',
  selection: '#daaeea',
  primaryLight: '#DDCEF8',
  primary: '#785188',
  primaryDark: '#55346C',
  primaryOpacity: '#7a528933',
  secondaryLight: '#ae5afe',
  secondary: '#7928ca',
  secondaryDark: '#430098',
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
  textGray:'#999999',
};

const lightColors = {
  ...baseColors,
  text: '#343433',
};

const darkColors = {
  ...baseColors,
  text: '#ffffff',
};

export default {
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  lightColors,
  darkColors,
};
