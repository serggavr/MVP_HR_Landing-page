export default class Section {
  constructor({
    renderer
  }, containerSelector) {
    this.container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element) {
    this.container.append(element)
  }

  addItemToTopOfList(element) {
    this.container.prepend(element)
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