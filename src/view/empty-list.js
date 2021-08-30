import AbstractView from './abstract';
import { FilterType } from '../utils/const';

const NoEventsTextType = {
  [FilterType.ALL]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PAST]: 'There are no past events now',
};

const createEmptyList = (filterType) =>
  `<p class="trip-events__msg">${NoEventsTextType[filterType]}</p>`;

export default class EmptyList extends AbstractView {
  constructor(filterType) {
    super();
    this._filter = filterType;
  }

  getTemplate() {
    return createEmptyList(this._filter);
  }
}
