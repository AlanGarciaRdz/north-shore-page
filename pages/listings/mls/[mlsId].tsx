import { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { RefObject, useEffect, useRef, useState } from 'react';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import PageLayout from 'src/components/layouts/PageLayout';
import { LISTINGS_URL } from 'src/scripts/GeneralData';
import { GenerateAreas, SimplyRETSGenerateSingleProperty } from 'src/scripts/RETSPropertiesData';
import DevelopmentDataInfo from 'src/sections/development/DevelopmentDataInfo';
import DevelopmentGallery from 'src/sections/development/DevelopmentGallery';
import DevelopmentGeneralInfo from 'src/sections/development/DevelopmentGeneralInfo';
import DevelopmentHeader from 'src/sections/development/DevelopmentHeader';
import DevelopmentMap from 'src/sections/development/DevelopmentMap';
import DevelopmentMLSInfo from 'src/sections/development/DevelopmentMLSInfo';

export async function getServerSideProps(props: any) {
  const { mlsId }: { mlsId: string } = props.params;
  const listingData = GenerateAreas();
  const development = await SimplyRETSGenerateSingleProperty(mlsId, listingData);
  if (development === undefined) {
    return {
      props: {
        development: {} as DevelopmentCompleteProps,
      },
      redirect: {
        destination: LISTINGS_URL,
      },
    };
  }
  return {
    props: { development },
  };
}

function Development({ development }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const contactRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (development === undefined) {
      router.push('/');
    }
  });
  if (development === undefined) {
    return <div />;
  }
  return (
    <PageLayout showContactCard navigationOnAbsolute={true}>
      <DevelopmentHeader
        {...development}
        contactAgent={() => {
          if (contactRef.current !== null) {
            contactRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      />
      <DevelopmentGallery {...development} />
      <DevelopmentDataInfo
        {...development}
        contactAgent={() => {
          if (contactRef.current !== null) {
            contactRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }}
      />
      <DevelopmentGeneralInfo {...development} />
      <DevelopmentMLSInfo />
      <DevelopmentMap {...development} />
      <div
        style={{
          width: '100%',
          height: 20,
          position: 'absolute',
          bottom: 1000,
        }}
        ref={contactRef as RefObject<HTMLDivElement>}
      />
    </PageLayout>
  );
}

export default Development;
