"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDataConsumer = exports.useContactDataContext = exports.ContactDataContext = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importStar(require("react"));
exports.ContactDataContext = (0, react_1.createContext)(undefined);
const useContactDataContext = () => (0, react_1.useContext)(exports.ContactDataContext);
exports.useContactDataContext = useContactDataContext;
const ContactDataConsumer = exports.ContactDataContext.Consumer;
exports.ContactDataConsumer = ContactDataConsumer;
const ContactDataProvider = ({ children }) => {
    const [contactDataInfo, setContactDataInfo] = (0, react_1.useState)(undefined);
    (0, react_1.useEffect)(() => {
        getContactDataInfo();
    }, []);
    async function getContactDataInfo() {
        if (contactDataInfo === undefined) {
            const tempContactInfo = {
                phoneNumber: '+52 311 129 3296',
                email: 'info@northshorerealtysanpancho.com',
                address1: 'Av. Tercer Mundo #70, Zip Code: 63734 San Pancho,',
                address2: ' Jalisco MX',
                bottomData1: {
                    label: 'Listings Sayulita',
                    link: '/',
                },
                bottomData2: {
                    label: 'Listings Punta Mita',
                    link: '/',
                },
                contactCardSubtitle: 'North Shore Realty San Pancho',
                contactCardButtonLabel: 'Contact an Agent',
            };
            setContactDataInfo(tempContactInfo);
            return tempContactInfo;
        }
        else {
            return contactDataInfo;
        }
    }
    return (<exports.ContactDataContext.Provider value={{ getContactDataInfo, contactDataInfo }}>
      {children}
    </exports.ContactDataContext.Provider>);
};
ContactDataProvider.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = ContactDataProvider;
