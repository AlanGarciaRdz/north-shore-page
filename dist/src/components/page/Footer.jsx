"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@nextui-org/react");
const link_1 = __importDefault(require("next/link"));
const OptimizeImage_1 = __importDefault(require("src/components/base/OptimizeImage"));
const ContactDataContext_1 = require("src/context/ContactDataContext");
const theme_1 = require("styles/theme");
const ContactCard_1 = __importDefault(require("../contact/ContactCard"));
function Footer({ showContactCard }) {
    const contextData = (0, ContactDataContext_1.useContactDataContext)();
    const contactDataInfo = contextData === null || contextData === void 0 ? void 0 : contextData.contactDataInfo;
    if (contactDataInfo === undefined) {
        return <div />;
    }
    return (<react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            borderTop: '8px solid $black',
            backgroundColor: '$background',
            marginBottom: 51,
        }}>
      <react_1.Container css={Object.assign(Object.assign({}, theme_1.MainSectionsContainerCSS), { width: '100%', height: '100%' })}>
        <react_1.Grid.Container justify='space-between' alignItems='center' css={{ height: '100%', position: 'relative' }}>
          <react_1.Grid xs={12} sm={0} css={{ position: 'absolute', width: '100%', top: -260, right: 0 }}>
            {showContactCard === true && <ContactCard_1.default />}
          </react_1.Grid>
          <react_1.Grid xs={12} sm={6}>
            <react_1.Container fluid responsive={false} css={{
            margin: 0,
            padding: 0,
            paddingTop: 280,
            '@sm': {
                paddingTop: 52,
            },
        }}>
              <react_1.Grid.Container>
                <react_1.Grid xs={12} css={{ marginBottom: 32 }}>
                  <link_1.default href={'/'}>
                    <OptimizeImage_1.default src={'/images/logo-blue.png'} layout='fixed' alt='North Shore Logo' useBlur={false} width={65} height={80} containerCSS={{ cursor: 'pointer' }}/>
                  </link_1.default>
                </react_1.Grid>
                <react_1.Grid xs={12} css={{ marginBottom: 4 }}>
                  <react_1.Text h2 color='$secondary'>
                    {'Contact us'}
                  </react_1.Text>
                </react_1.Grid>
                <react_1.Grid xs={12} css={{ marginBottom: 32 }}>
                  <react_1.Container fluid responsive={false} css={{
            padding: 0,
            margin: 0,
            height: 2,
            width: 81,
            backgroundColor: '$secondary',
        }}/>
                </react_1.Grid>
                <react_1.Grid xs={12} css={{ marginBottom: 0 }}>
                  <a href={`tel:${contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.phoneNumber.replace(/\s/g, '')}`}>
                    <react_1.Text color='$secondary'>
                      {contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.phoneNumber}
                    </react_1.Text>
                  </a>
                </react_1.Grid>
                <react_1.Grid xs={12} css={{ marginBottom: 32 }}>
                  <a href={`mailto:${contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.email}`}>
                    <react_1.Text color='$secondary'>{contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.email}</react_1.Text>
                  </a>
                </react_1.Grid>
                <react_1.Grid xs={12} sm={5} css={{ marginBottom: 32 }}>
                  <react_1.Text color='$secondary'>
                    {contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.address1}
                    <span style={{ fontWeight: 'bold' }}>
                      {contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.address2}
                    </span>
                  </react_1.Text>
                </react_1.Grid>
                <react_1.Grid xs={12}>
                  <a href={`${contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.bottomData1.link}`}>
                    <react_1.Text color='$secondary'>
                      {contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.bottomData1.label}
                    </react_1.Text>
                  </a>
                  <react_1.Text color='$secondary' css={{ margin: '0px 10px' }}>
                    {'·'}
                  </react_1.Text>
                  <a href={`${contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.bottomData2.link}`}>
                    <react_1.Text color='$secondary'>
                      {contactDataInfo === null || contactDataInfo === void 0 ? void 0 : contactDataInfo.bottomData2.label}
                    </react_1.Text>
                  </a>
                </react_1.Grid>
              </react_1.Grid.Container>
            </react_1.Container>
          </react_1.Grid>
          <react_1.Grid xs={0} sm={6} css={{ position: 'absolute', width: '100%', top: -230, right: 0 }}>
            {showContactCard === true && <ContactCard_1.default />}
          </react_1.Grid>
        </react_1.Grid.Container>
      </react_1.Container>
    </react_1.Container>);
}
exports.default = Footer;
