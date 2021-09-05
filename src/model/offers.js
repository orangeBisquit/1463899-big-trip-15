import AbstractObserver from './points-observer';

export default class Offer extends AbstractObserver {
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


