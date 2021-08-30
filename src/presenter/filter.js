import FilterView from '../view/filter.js';
import { FilterType, UpdateType } from '../utils/const.js';
import { render, replace, remove, RenderPosition } from '../utils/render.js';

export default class Filter {
  constructor(filterContainer, filterModel, eventsModel) {
    // FIXME: Не уверен что querySelector тут уместен, возможно стоит находить сразу в main.js
    this._filterContainer = filterContainer.querySelector('.trip-controls__filters');
    this._filterModel = filterModel;
    this._eventsModel = eventsModel;

    this._filterComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._eventsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  init() {
    const activeFilter = this._filterModel.getFilter();
    const filters = this._getFilters();
    const prevFilterComponent = this._filterComponent;

    this._filterComponent = new FilterView(filters, activeFilter);
    this._filterComponent.setFilterTypeChangeHandler(this._handleFilterTypeChange);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._filterModel.getFilter() === filterType) {
      return;
    }
    this._filterModel.setFilter(UpdateType.MINOR, filterType);
  }

  _getFilters() {
    return Object.values(FilterType);
  }
}
