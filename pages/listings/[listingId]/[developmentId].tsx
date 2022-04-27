import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';
import PageLayout from 'src/components/layouts/PageLayout';
import DevelopmentDataInfo from 'src/sections/development/DevelopmentDataInfo';
import DevelopmentGallery from 'src/sections/development/DevelopmentGallery';
import DevelopmentGeneralInfo from 'src/sections/development/DevelopmentGeneralInfo';
import DevelopmentHeader from 'src/sections/development/DevelopmentHeader';
import { getDevelopmentData } from 'src/serverData/DevelopmentData';

export const getStaticProps = async () => {
  const development = await getDevelopmentData();
  return {
    props: { development },
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // false or 'blocking'
  };
}

function Development({
  development,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout showContactCard navigationOnAbsolute={true}>
      <DevelopmentHeader {...development} />
      <DevelopmentGallery {...development} />
      <DevelopmentDataInfo {...development} />
      <DevelopmentGeneralInfo {...development} />
    </PageLayout>
  );
}

export default Development;
