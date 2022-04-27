import PropTypes from 'prop-types';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ContactDataProviderProps = {
  children: ReactNode;
};

export type ContactDataInfoProps = {
  phoneNumber: string;
  email: string;
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
  contactCardSubtitle: string;
  contactCardButtonLabel: string;
};

interface ContactDataInterfaceContext {
  getContactDataInfo: () => Promise<ContactDataInfoProps>;
  contactDataInfo: ContactDataInfoProps | undefined;
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

  useEffect(() => {
    getContactDataInfo();
  }, []);

  async function getContactDataInfo() {
    if (contactDataInfo === undefined) {
      const tempContactInfo: ContactDataInfoProps = {
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
    } else {
      return contactDataInfo;
    }
  }
  return (
    <ContactDataContext.Provider
      value={{ getContactDataInfo, contactDataInfo }}
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
