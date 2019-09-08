import axios from 'axios';
import config from '../public/config';

export default function flickr(method, params) {
  return axios({
    method: 'get',
    url: 'https://api.flickr.com/services/rest/',
    params: {
      api_key: config.api_key,
      format: 'json',
      nojsoncallback: 1,
      ...params,
      method: `flickr.${method}`,
    },
  });
}
