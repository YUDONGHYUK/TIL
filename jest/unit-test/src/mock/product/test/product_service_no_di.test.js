const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
// ProductClient 자체를 mock을 사용한다고 명시
jest.mock('../product_client.js');

describe('ProductService', () => {
  // ProductClient에 있는 fetchItems에 대한 mock 생성
  const fetchItems = jest.fn(async () => [
    { item: 'Milk', available: true },
    { item: 'Coke', available: false },
  ]);
  // fetchItems 함수와 ProductClient를 연결 시킨다.
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    // 단위 테스트는 모듈간의 상호작용을 테스트 하면 안되고 단위 하나만 테스트해야 한다.
    // ProductService에서 ProductClient를 사용하기 때문에 ProductService에서 작성한 코드
    // this.productClient.fetchItems()도 내부적으로 테스트가 된다.
    // 그래서 fetchItems() 함수가 데이터를 받아오지 못하면 Service 테스트 코드는 실패한다.
    // !! network 상태에 의존하는 코드는 좋지 않다.
    // 그렇기 때문에, ProductClient와 독립적으로 의존하지 않게 코드를 작성하기 위해서
    // ProductClient 자체를 mock하면 된다.
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();

    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'Milk', available: true }]);
  });
});
