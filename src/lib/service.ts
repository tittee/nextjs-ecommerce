import NestApi from './nestApi';
import { transformBanner, transformProduct } from './transformer';

class Service {
  api: NestApi;

  constructor(apiUrl?: string) {
    this.api = new NestApi(
      (apiUrl || process.env.NEXT_PUBLIC_SERVICE_API) ?? '',
      process.env.NEST_API_USER ?? 'admin@demo.com',
      process.env.NEST_API_PASS ?? 'Sawaddee1131'
    );
  }

  getProducts(): Promise<any> {
    return this.api
      .get(`/products`)
      .then((data) => transformProduct(data))
      .catch((error) => {
        if (error.response || error.response.status === 404) {
          return null;
        }
        throw error;
      });
  }

  getBanner() {
    return this.api.get('/banner').then((data) => transformBanner(data));
  }
}

export default Service;
