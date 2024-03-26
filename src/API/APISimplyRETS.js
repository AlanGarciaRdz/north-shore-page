import RestClient from './RestClient';

export const sparkMainIp = process.env.NEXT_PUBLIC_API_SIMPLY_RETS_IP; //The IP of the page
const basicAuth = Buffer.from("API").toString('base64') || Buffer.from(process.env.NEXT_PUBLIC_API_SIMPLY_RETS_AUTH).toString('base64') ;

export default class APISimplyRETS extends RestClient {
  constructor(authToken, extraHeader) {
    super(sparkMainIp, {
      headers: {
        Authorization: 'Basic YXJtYW5fMjQ1MjEzMTY6NTU1OTFnNDEzOTY4MTMyMg==',  //hardcoded because doesnt read the variable of prcess.env
        ...extraHeader,
      },
    });
  }
}
