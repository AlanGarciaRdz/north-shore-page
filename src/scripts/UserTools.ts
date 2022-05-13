import platform from 'platform';

//Get IP of the user
export const getIp = () => {
  return new Promise((resolve, reject) => {
    fetch('https://ipapi.co/json/', {
      method: 'GET',
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export type ReturnIPDataProps = {
  platformName: string | undefined;
  platformVersion: string | undefined;
  platformProduct: string | undefined;
  platformOsArchitecture: number | undefined;
  platformOsFamily: string | undefined;
  platformOsVersion: string | undefined;
  platformIp: any;
  platformCity: any;
  platformRegion: any;
  platformRegionCode: any;
};
//Get plataform data and place from the ip of the user
export async function getPlatform(): Promise<ReturnIPDataProps> {
  let ipInfo: any = await getIp();
  const returnPlatformData: ReturnIPDataProps = {
    platformName: platform.name,
    platformVersion: platform.version,
    platformProduct: platform.product,
    platformOsArchitecture: platform.os?.architecture,
    platformOsFamily: platform.os?.family,
    platformOsVersion: platform.os?.version,
    platformIp: ipInfo?.ip,
    platformCity: ipInfo?.city,
    platformRegion: ipInfo?.region,
    platformRegionCode: ipInfo?.region_code,
  };
  return returnPlatformData;
}
