export default global.fetch = jest.fn(() =>
  Promise.resolve({
    product: {
      id: "1",
      name: "dummy product name",
      power: "dummy power",
      description: "dummy description",
      price: 1299,
      quantity: 4,
      brand: "dummy brand",
      weight: 77.0,
      height: 12.6,
      width: 6.2,
      length: 6.2,
      modelCode: "dummy model code",
      colour: "dummy colour",
      imgUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
    },
  })
);
