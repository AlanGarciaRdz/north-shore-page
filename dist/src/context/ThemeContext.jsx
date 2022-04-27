"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Import `createTheme`
const react_1 = require("@nextui-org/react");
const next_themes_1 = require("next-themes");
const react_2 = __importDefault(require("react"));
const theme_1 = __importDefault(require("styles/theme"));
function BaseThemeProvider({ children }) {
    const lightTheme = (0, react_1.createTheme)({
        type: 'light',
        theme: {
            colors: theme_1.default.lightColors,
            fonts: theme_1.default.fonts,
            fontSizes: theme_1.default.fontSizes,
            fontWeights: theme_1.default.fontWeights,
        },
    });
    const darkTheme = (0, react_1.createTheme)({
        type: 'dark',
        theme: {
            colors: theme_1.default.darkColors,
            fonts: theme_1.default.fonts,
            fontSizes: theme_1.default.fontSizes,
            fontWeights: theme_1.default.fontWeights,
        },
    });
    return (<next_themes_1.ThemeProvider defaultTheme='light' attribute='class' value={{
            light: lightTheme.className,
            dark: darkTheme.className,
        }}>
      <react_1.NextUIProvider>{children}</react_1.NextUIProvider>
    </next_themes_1.ThemeProvider>);
}
exports.default = BaseThemeProvider;
