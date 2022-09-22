import NestApi from './nestApi';
import { transformBanner } from './transformer';

class Service {
  api: NestApi;

  constructor(apiUrl?: string) {
    this.api = new NestApi(
      (apiUrl || process.env.NEXT_PUBLIC_API_URL) ?? '',
      process.env.NEST_API_USER ?? 'admin',
      process.env.NEST_API_PASS ?? 'password'
    );
  }

  getBanner() {
    return this.api.get('/banner').then((data) => transformBanner(data));
  }
}

export default Service;
