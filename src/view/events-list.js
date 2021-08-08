import { createElement } from '../utils/common';

export const createEventsList = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class EventsList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventsList();
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

