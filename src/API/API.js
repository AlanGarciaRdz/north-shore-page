import RestClient from './RestClient';

export const mainIp = process.env.NEXT_PUBLIC_API_MAIN_IP || "https://northshorerealtysanpancho.com/"; //The IP of the page
export const imageMainIp = mainIp + '/api/files/'; //The route of images

export default class API extends RestClient {
  constructor(authToken, extraHeader) {
    super(mainIp + '/api', {
      headers: {
        // Include as many custom headers as you need
        ...extraHeader,
      },
    });
  }
}
