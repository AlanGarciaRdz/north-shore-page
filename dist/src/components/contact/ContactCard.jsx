"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const react_2 = require("react");
const ContactDataContext_1 = require("src/context/ContactDataContext");
const StringTools_1 = require("src/scripts/StringTools");
const OptimizeImage_1 = __importDefault(require("../base/OptimizeImage"));
const RenderContainer_1 = __importDefault(require("../layouts/RenderContainer"));
function ContactCard() {
    const [userContactData, setUserContactData] = (0, react_2.useState)({});
    const [sendingContactInfo, setSendingContactInfo] = (0, react_2.useState)(false);
    const contextData = (0, ContactDataContext_1.useContactDataContext)();
    const contactDataInfo = contextData === null || contextData === void 0 ? void 0 : contextData.contactDataInfo;
    if (contactDataInfo === undefined) {
        return <div />;
    }
    const inputCSS = {
        marginBottom: 24,
        borderRadius: 4,
        '.nextui-input-container': {
            borderRadius: 'inherit',
            borderWidth: 1,
        },
        '.nextui-input-wrapper': { borderRadius: 'inherit' },
    };
    function isValidContactInfo() {
        if ((0, StringTools_1.IsEmptyString)(userContactData.name)) {
            return false;
        }
        else if (!(0, StringTools_1.IsValidEmail)(userContactData.email)) {
            return false;
        }
        else if (!(0, StringTools_1.IsValidPhoneNumber)(userContactData.phone.replace(/[^0-9]/g, ''))) {
            return false;
        }
        else if ((0, StringTools_1.IsEmptyString)(userContactData.message)) {
            return false;
        }
        return true;
    }
    async function sendContactInfo() {
        setSendingContactInfo(true);
        setSendingContactInfo(false);
    }
    return (<react_1.Card css={{
            borderRadius: 4,
            position: 'relative',
            overflow: 'visible',
        }}>
      <RenderContainer_1.default mobileView={<div />} desktopView={<OptimizeImage_1.default src={'/images/palm.png'} layout='fixed' objectFit='contain' objectPosition='center' alt='North Shore Logo' useBlur={false} width={360} height={398} containerCSS={{ position: 'absolute', left: -360, top: 0 }}/>}/>
      <react_1.Card.Body css={{
            backgroundColor: '$background',
            boxShadow: '0px 10px 20px rgba(126, 148, 166, 0.1)',
            padding: '32px 24px',
        }}>
        <react_1.Text weight='bold' css={{ marginBottom: 8 }}>
          {'Contact an Agent'}
        </react_1.Text>
        <react_1.Text css={{ marginBottom: 24 }}>
          {contactDataInfo.contactCardSubtitle}
        </react_1.Text>
        <react_1.Input disabled={sendingContactInfo} clearable bordered placeholder='Name' value={userContactData.name} onChange={(e) => {
            setUserContactData(Object.assign(Object.assign({}, userContactData), { name: e.target.value }));
        }} css={Object.assign({}, inputCSS)}/>
        <react_1.Input disabled={sendingContactInfo} clearable bordered type='email' placeholder='Email' value={userContactData.email} onChange={(e) => {
            setUserContactData(Object.assign(Object.assign({}, userContactData), { email: e.target.value }));
        }} css={Object.assign({}, inputCSS)}/>
        <react_1.Input disabled={sendingContactInfo} clearable bordered type='tel' placeholder='Phone' value={userContactData.phone} onChange={(e) => {
            setUserContactData(Object.assign(Object.assign({}, userContactData), { phone: (0, StringTools_1.formatToPhoneNumber)(e.target.value) }));
        }} css={Object.assign({}, inputCSS)}/>
        <react_1.Textarea disabled={sendingContactInfo} bordered placeholder='Message' value={userContactData.message} onChange={(e) => {
            setUserContactData(Object.assign(Object.assign({}, userContactData), { message: e.target.value }));
        }} css={Object.assign({}, inputCSS)}/>
        <react_1.Button onClick={() => {
            sendContactInfo();
        }} disabled={!isValidContactInfo() || sendingContactInfo} bordered={isValidContactInfo() || sendingContactInfo}>
          {'Contact an Agent'}
        </react_1.Button>
      </react_1.Card.Body>
    </react_1.Card>);
}
exports.default = ContactCard;
