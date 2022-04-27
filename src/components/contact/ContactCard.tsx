import { Button, Card, Input, Text, Textarea } from '@nextui-org/react';
import { useState } from 'react';
import { useContactDataContext } from 'src/context/ContactDataContext';
import { formatToPhoneNumber, IsEmptyString, IsValidEmail, IsValidPhoneNumber } from 'src/scripts/StringTools';

import OptimizeImage from '../base/OptimizeImage';
import RenderContainer from '../layouts/RenderContainer';

type UserContactInfoInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactCard() {
  const [userContactData, setUserContactData] = useState<UserContactInfoInput>(
    {} as UserContactInfoInput
  );
  const [sendingContactInfo, setSendingContactInfo] = useState(false);

  const contextData = useContactDataContext();
  const contactDataInfo = contextData?.contactDataInfo;
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
    if (IsEmptyString(userContactData.name)) {
      return false;
    } else if (!IsValidEmail(userContactData.email)) {
      return false;
    } else if (
      !IsValidPhoneNumber(userContactData.phone.replace(/[^0-9]/g, ''))
    ) {
      return false;
    } else if (IsEmptyString(userContactData.message)) {
      return false;
    }
    return true;
  }

  async function sendContactInfo() {
    setSendingContactInfo(true);
    setSendingContactInfo(false);
  }

  return (
    <Card
      css={{
        borderRadius: 4,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <RenderContainer
        mobileView={<div />}
        desktopView={
          <OptimizeImage
            src={'/images/palm.png'}
            layout='fixed'
            objectFit='contain'
            objectPosition='center'
            alt='North Shore Logo'
            useBlur={false}
            width={360}
            height={398}
            containerCSS={{ position: 'absolute', left: -360, top: 0 }}
          />
        }
      />
      <Card.Body
        css={{
          backgroundColor: '$background',
          boxShadow: '0px 10px 20px rgba(126, 148, 166, 0.1)',
          padding: '32px 24px',
        }}
      >
        <Text weight='bold' css={{ marginBottom: 8 }}>
          {'Contact an Agent'}
        </Text>
        <Text css={{ marginBottom: 24 }}>
          {contactDataInfo.contactCardSubtitle}
        </Text>
        <Input
          disabled={sendingContactInfo}
          clearable
          bordered
          placeholder='Name'
          value={userContactData.name}
          onChange={(e) => {
            setUserContactData({ ...userContactData, name: e.target.value });
          }}
          css={{ ...inputCSS }}
        />
        <Input
          disabled={sendingContactInfo}
          clearable
          bordered
          type='email'
          placeholder='Email'
          value={userContactData.email}
          onChange={(e) => {
            setUserContactData({ ...userContactData, email: e.target.value });
          }}
          css={{ ...inputCSS }}
        />
        <Input
          disabled={sendingContactInfo}
          clearable
          bordered
          type='tel'
          placeholder='Phone'
          value={userContactData.phone}
          onChange={(e) => {
            setUserContactData({
              ...userContactData,
              phone: formatToPhoneNumber(e.target.value),
            });
          }}
          css={{ ...inputCSS }}
        />
        <Textarea
          disabled={sendingContactInfo}
          bordered
          placeholder='Message'
          value={userContactData.message}
          onChange={(e) => {
            setUserContactData({ ...userContactData, message: e.target.value });
          }}
          css={{ ...inputCSS }}
        />
        <Button
          onClick={() => {
            sendContactInfo();
          }}
          disabled={!isValidContactInfo() || sendingContactInfo}
          bordered={isValidContactInfo() || sendingContactInfo}
        >
          {'Contact an Agent'}
        </Button>
      </Card.Body>
    </Card>
  );
}
