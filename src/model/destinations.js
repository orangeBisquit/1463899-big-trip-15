import AbstractObserver from './points-observer';

export default class Destinations extends AbstractObserver {
  constructor() {
    super();
    this._destinations = null;
  }

  setDestinations(destinations) {
    this._destinations = destinations;
  }

  getDestinations() {
    return this._destinations;
  }
}
