export default class Section {
  constructor({
    renderer
  }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this._container.append(element)
  }

  addItemToTopOfList(element) {
    this._container.prepend(element)
  }

 removeItems() {
    this.container.replaceChildren([])
  }

  renderItems(items, amount) {
    const amountRenderedItems = this.container.children.length

    if (amountRenderedItems + amount >= items.length) {
      amount = items.length - amountRenderedItems
    }
    for (let i = amountRenderedItems; i < amountRenderedItems + amount; i++) {
      this._renderer(items[i])
      
    }
  }
}