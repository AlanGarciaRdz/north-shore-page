import { Button, Card, Input, Text, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { useToaster } from 'react-hot-toast';
import API from 'src/API/API';
import { useContactDataContext } from 'src/context/ContactDataContext';
import { formatToNumber, formatToPhoneNumber, IsEmptyString, IsValidEmail, IsValidPhoneNumber } from 'src/scripts/StringTools';
import { getPlatform } from 'src/scripts/UserTools';

import OptimizeImage from '../base/OptimizeImage';
import RenderContainer from '../layouts/RenderContainer';

type UserContactInfoInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactCard() {
  const router = useRouter();
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
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
    marginTop: 10,
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
    } else if (!IsValidPhoneNumber(userContactData.phone)) {
      return false;
    } else if (IsEmptyString(userContactData.message)) {
      return false;
    }
    return true;
  }

  async function sendContactInfo() {
    setSendingContactInfo(true);
    const userPlatform = await getPlatform();
    const api = new API();
    const sendLeadToast = toast.loading('Sending Message...');
    const postLead = await api.POST('/leads', {
      data: {
        name: userContactData.name,
        email: userContactData.email,
        phoneNumber: formatToNumber(userContactData.phone),
        message: userContactData.message,
        userPlatform: userPlatform,
        property:
          router.query.mlsId !== undefined
            ? `mlsId-${router.query.mlsId}`
            : router.query.cmsId !== undefined
            ? `cmsId-${router.query.cmsId}`
            : '',
        url: window.location.href,
      },
    });
    setTimeout(() => {
      if (postLead.error !== undefined) {
        toast.error('Please Try Again', {
          id: sendLeadToast,
        });
      } else {
        toast.success('Message Sended', {
          id: sendLeadToast,
        });
      }
    }, 200);
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
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
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
          {contactDataInfo.contactCardTitle}
        </Text>
        <Text css={{ marginBottom: 24 }}>{contactDataInfo.contactCardSubtitle}</Text>
        <Input
          disabled={sendingContactInfo}
          clearable
          bordered
          labelPlaceholder='Name'
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
          labelPlaceholder='Email'
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
          labelPlaceholder='Phone'
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
          labelPlaceholder='Message'
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
          {contactDataInfo.contactCardButtonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}
