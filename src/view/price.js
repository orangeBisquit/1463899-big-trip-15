import { createElement, calculatePrice } from '../utils/common.js';

const createPrice = (price) =>
  `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>`;

export default class Price {
  constructor(events) {
    this._price = calculatePrice(events);
    this._element = null;
  }

  getTemplate() {
    return createPrice(this._price);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
