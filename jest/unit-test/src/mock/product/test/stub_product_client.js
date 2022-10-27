class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk', available: true },
      { item: 'Coke', available: false },
    ];
  }
}

module.exports = StubProductClient;
