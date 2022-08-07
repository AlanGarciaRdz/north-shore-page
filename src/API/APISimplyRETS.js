import RestClient from './RestClient';

export const sparkMainIp = process.env.NEXT_PUBLIC_API_SIMPLY_RETS_IP; //The IP of the page
const basicAuth = Buffer.from(process.env.NEXT_PUBLIC_API_SIMPLY_RETS_AUTH).toString('base64');
export default class APISimplyRETS extends RestClient {
  constructor(authToken, extraHeader) {
    super(sparkMainIp, {
      headers: {
        Authorization: 'Basic ' + basicAuth,
        ...extraHeader,
      },
    });
  }
}
