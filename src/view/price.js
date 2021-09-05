import AbstractView from './abstract';
import { calculatePrice } from '../utils/common';

const createPrice = (price) =>
  `<p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>`;

export default class Price extends AbstractView {
  constructor(events) {
    super();
    this._price = calculatePrice(events);
  }

  getTemplate() {
    return createPrice(this._price);
  }
}
