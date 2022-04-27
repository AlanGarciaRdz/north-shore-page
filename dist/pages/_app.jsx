"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("styles/fonts.css");
const react_1 = require("@nextui-org/react");
const ContactDataContext_1 = __importDefault(require("src/context/ContactDataContext"));
const ThemeContext_1 = __importDefault(require("src/context/ThemeContext"));
function MyApp({ Component, pageProps }) {
    return (<ThemeContext_1.default>
      <react_1.CssBaseline />
      <ContactDataContext_1.default>
        <Component {...pageProps}/>
      </ContactDataContext_1.default>
    </ThemeContext_1.default>);
}
exports.default = MyApp;
