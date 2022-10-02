import BaseHttpService from './base-http.service';
import queryString from 'query-string';

export default class ProductsService extends BaseHttpService {
  fetchProducts({ status, search }) {
    const queryObj = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('products' + (queryStr ? `?${queryStr}` : ''));
  }

  fetchProductsByUser({ userId }) {
    const queryObj = {};

    if (userId.length) {
      queryObj.userId = userId;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('products/user/' + (queryStr ? `?${queryStr}` : ''));
  }

  async deleteProduct(id) {
    await this.delete(`products/${id}`);
  }

  updateProductStatus(id, status) {
    return this.patch(`products/${id}/status`, { status });
  }

  createProduct(title, description) {
    return this.post(`products`, { title, description });
  }
}
