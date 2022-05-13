import PropTypes from 'prop-types';
import qs from 'qs';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import API from 'src/API/API';
import { getPlatform, ReturnIPDataProps } from 'src/scripts/UserTools';

type ContactDataProviderProps = {
  children: ReactNode;
};

export type ContactDataInfoProps = {
  phoneNumber: {
    label: string;
    link: string;
  };
  email: {
    label: string;
    link: string;
  };
  address1: string;
  address2: string;
  bottomData1: {
    label: string;
    link: string;
  };
  bottomData2: {
    label: string;
    link: string;
  };
  contactCardTitle: string;
  contactCardSubtitle: string;
  contactCardButtonLabel: string;
};

interface ContactDataInterfaceContext {
  getContactDataInfo: () => Promise<ContactDataInfoProps>;
  contactDataInfo: ContactDataInfoProps | undefined;
  userData: ReturnIPDataProps | undefined;
}

export const ContactDataContext = createContext<
  ContactDataInterfaceContext | undefined
>(undefined);

export const useContactDataContext = () => useContext(ContactDataContext);
const ContactDataConsumer = ContactDataContext.Consumer;

const ContactDataProvider = ({ children }: ContactDataProviderProps) => {
  const [contactDataInfo, setContactDataInfo] = useState<
    ContactDataInfoProps | undefined
  >(undefined);

  const [userData, setUserData] = useState<ReturnIPDataProps | undefined>(
    undefined
  );

  useEffect(() => {
    getUserData();
    getContactDataInfo();
  }, []);

  async function getUserData() {
    const userData = await getPlatform();
    setUserData(userData);
  }

  async function getContactDataInfo() {
    if (contactDataInfo === undefined) {
      const api = new API();
      const query = qs.stringify(
        {
          populate: ['footerPhone', 'footerEmail'],
        },
        {
          encodeValuesOnly: true,
        }
      );
      const getContactPage = await api.GET(`/contact-page?${query}`);
      const contactPageAttributes = getContactPage.data.attributes;
      const tempContactInfo: ContactDataInfoProps = {
        phoneNumber: {
          label: contactPageAttributes.footerPhone.label,
          link: contactPageAttributes.footerPhone.link,
        },
        email: {
          label: contactPageAttributes.footerEmail.label,
          link: contactPageAttributes.footerEmail.link,
        },
        address1: contactPageAttributes.footerAddress1,
        address2: contactPageAttributes.footerAddress2,
        bottomData1: {
          label: 'Listings Sayulita',
          link: '/',
        },
        bottomData2: {
          label: 'Listings Punta Mita',
          link: '/',
        },
        contactCardTitle: contactPageAttributes.cardTitle,
        contactCardSubtitle: contactPageAttributes.cardSubtitle,
        contactCardButtonLabel: contactPageAttributes.cardButtonLabel,
      };
      setContactDataInfo(tempContactInfo);
      return tempContactInfo;
    } else {
      return contactDataInfo;
    }
  }
  return (
    <ContactDataContext.Provider
      value={{ getContactDataInfo, contactDataInfo, userData }}
    >
      {children}
    </ContactDataContext.Provider>
  );
};

ContactDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContactDataConsumer };
export default ContactDataProvider;
