import { InferGetStaticPropsType } from 'next';
import { RefObject, useRef, useState } from 'react';
import PageLayout from 'src/components/layouts/PageLayout';
import { GenerateAreas, SimplyRETSGenerateSingleProperty, SimplyRETSGetAllListing } from 'src/scripts/RETSPropertiesData';
import DevelopmentDataInfo from 'src/sections/development/DevelopmentDataInfo';
import DevelopmentGallery from 'src/sections/development/DevelopmentGallery';
import DevelopmentGeneralInfo from 'src/sections/development/DevelopmentGeneralInfo';
import DevelopmentHeader from 'src/sections/development/DevelopmentHeader';

export async function getStaticPaths() {
  const developments = await SimplyRETSGetAllListing();
  const paths = developments.map((retsProperty: any) => {
    return {
      params: {
        mlsId: retsProperty.mlsId.toString(),
      },
    };
  });
  return {
    paths,
    fallback: 'blocking', // false or 'blocking'
  };
}

export async function getStaticProps(props: any) {
  const { mlsId }: { mlsId: string } = props.params;
  const listingData = GenerateAreas();
  const development = await SimplyRETSGenerateSingleProperty(mlsId, listingData);
  return {
    props: { development },
  };
}

function Development({ development }: InferGetStaticPropsType<typeof getStaticProps>) {
  const contactRef = useRef<HTMLDivElement>(null);
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
