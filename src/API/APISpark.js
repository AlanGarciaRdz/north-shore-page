import RestClient from './RestClient';

export const sparkMainIp = process.env.NEXT_PUBLIC_API_SPARK_IP; //The IP of the page

export default class APISpark extends RestClient {
  constructor(authToken, extraHeader) {
    super(sparkMainIp, {
      headers: {
        // Include as many custom headers as you need
        'X-SparkApi-User-Agent': 'SparkBot',
        ...extraHeader,
      },
    });
  }
}
