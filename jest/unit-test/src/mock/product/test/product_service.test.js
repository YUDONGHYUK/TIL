const ProductService = require('../product.service.js');
const StubProductClient = require('./stub_product_client.js');

describe('ProductService - Stub', () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('should fliter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
