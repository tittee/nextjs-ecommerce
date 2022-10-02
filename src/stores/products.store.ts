import { observable, action } from 'mobx';

export default class ProductsStore {
  @observable products: object | undefined;

  @observable filters = { status: '', search: '' };

  constructor(productsService) {
    this.productsService = productsService;
  }

  updateFilters({ status, search }) {
    this.filters.status = status;
    this.filters.search = search;
    this.fetchProducts();
  }

  @action
  resetProducts() {
    this.products = [];
  }

  @action
  async fetchProducts() {
    const result = await this.productsService.fetchProducts(this.filters);

    if (result) {
      this.products = result.data;
    }
  }

  @action
  async createProduct(title, description) {
    const result = await this.productsService.createProduct(title, description);

    if (result) {
      this.products.push(result.data);
    }
  }

  @action
  async deleteProduct(id) {
    const idx = this.products.findIndex((product) => product.id === id);
    await this.productsService.deleteProduct(id);
    this.products.splice(idx, 1);
  }

  @action
  async updateProductStatus(id, status) {
    const product = this.products.find((product) => product.id === id);
    await this.productsService.updateProductStatus(id, status);
    product.status = status;
  }
}
