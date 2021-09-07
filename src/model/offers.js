import AbstractObserver from './abstract-observer';

export default class Offers extends AbstractObserver {
  constructor() {
    super();
    this._offers = null;
  }

  setOffers(offers) {
    this._offers = offers;
  }

  getOffers() {
    return this._offers;
  }
}


