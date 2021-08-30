import AbstractView from './abstract.js';
import { capitalizeFirstLetter } from '../utils/common.js';

const createFilter = (filter, activeFilter) => `<div class="trip-filters__filter">
        <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${filter === activeFilter ? 'checked' : ''}>
        <label class="trip-filters__filter-label" for="filter-${filter}">${capitalizeFirstLetter(filter)}</label>
    </div>`;

const createFiltersTemplate = (filters, activeFilter) => `<form class="trip-filters" action="#" method="get">
    ${filters.map((filter) => createFilter(filter, activeFilter)).join('\n')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;

export default class Filter extends AbstractView {
  constructor(filters, activeFilter) {
    super();
    this._filters = filters;
    this._activeFilter = activeFilter;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersTemplate(this._filters, this._activeFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback._filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback._filterTypeChange = callback;
    this.getElement().addEventListener('change', this._filterTypeChangeHandler);
  }
}
