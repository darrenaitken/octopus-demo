// Allow us to create batches of an item that can be added to the basket
export default class BasketItem {
  constructor(id, price, quantity) {
    this.id = id;
    this.price = parseFloat(price) || 0;
    this.quantity = quantity || 0;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}
