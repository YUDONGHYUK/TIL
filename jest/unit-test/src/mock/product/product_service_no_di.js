// 파일명에서 di는 dependency injection을 의미한다.

const ProductClient = require('./product_client.js');

class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}
module.exports = ProductService;
