class ProductService {
  constructor(productClient) {
    // class 내부에서 의존을 정의하고 만들어 사용하는 것은 dependency injection 원칙에 어긋난다.
    // 그렇기 때문에, 내부적으로 직접 만드는 것이 아니라 외부에서 받아와야 한다.
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
