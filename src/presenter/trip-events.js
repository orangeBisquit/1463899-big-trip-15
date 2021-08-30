import SortView from '../view/sort.js';
import EventsListView from '../view/events-list.js';
import EmptyListView from '../view/empty-list.js';
import EventPresenter from './event.js';
import EventNewPresenter from './event-new.js';
import { remove, render, RenderPosition } from '../utils/render.js';
import { sortDateDown, sortDurationDown, sortPriceDown, filter } from '../utils/common.js';
import { SortType, UserAction, UpdateType, FilterType } from '../utils/const.js';

export default class TripEvents {
  constructor(eventsBoard, eventsModel, filterModel) {
    this._eventsModel = eventsModel;
    this._filterModel = filterModel;

    this._eventsBoard = eventsBoard;
    this._eventPresenter = new Map();
    this._eventNewPresenter = null;
    this._currentSortType = SortType.DEFAULT;
    this._filterType = FilterType.ALL;

    this._sortComponent = null;
    this._eventNewComponent = null;
    this._eventsListComponent = new EventsListView();
    this._emptyList = null;

    this._handleEventChange = this._handleEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);


  }

  init() {
    render(this._eventsBoard, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderSort();
    this._clearAllEvents();
    this._renderAllEvents();

    this._eventsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);
  }

  destroy() {
    this._clearAllEvents();

    remove(this._sortComponent);

    this._eventsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _getEvents() {
    this._filterType = this._filterModel.getFilter();
    const events = this._eventsModel.getEvents();
    const filteredEvents = filter[this._filterType](events);

    switch (this._currentSortType) {
      case SortType.DEFAULT:
        return filteredEvents.sort(sortDateDown);
      case SortType.DURATION_DOWN:
        return filteredEvents.sort(sortDurationDown);
      case SortType.PRICE_DOWN:
        return filteredEvents.sort(sortPriceDown);
    }
    return filteredEvents;
  }

  _handleModeChange() {
    this._eventPresenter.forEach((presenter) => presenter.resetView());
    if (this._eventNewComponent !== null) {
      this._eventNewComponent.destroy();
    }
  }

  _handleEventChange(updatedEvent) {
    this._eventPresenter.get(updatedEvent.id).init(updatedEvent);
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      remove(this._sortComponent);
    }
    this._sortComponent = new SortView();
    render(this._eventsBoard, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this._eventsModel.updateEvent(updateType, update);
        break;
      case UserAction.ADD_EVENT:
        this._eventsModel.addEvent(updateType, update);
        break;
      case UserAction.DELETE_EVENT:
        this._eventsModel.deleteEvent(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._eventPresenter.get(data.id).init(data);
        break;
      // FIXME: Подумать над разницей Minor и Major
      case UpdateType.MINOR:
        this._clearAllEvents();
        this._renderAllEvents();
        break;
      case UpdateType.MAJOR:
        this._clearAllEvents();
        this._renderAllEvents();
        this._renderSort();
        break;
    }
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._currentSortType = sortType;
    this._clearAllEvents();
    this._renderAllEvents();
  }

  _renderEvent(event) {
    const eventPresenter = new EventPresenter(this._eventsListComponent, this._handleViewAction, this._handleModeChange);
    eventPresenter.init(event);
    this._eventPresenter.set(event.id, eventPresenter);
  }

  _renderAllEvents() {
    const events = this._getEvents(SortType.DEFAULT);
    if (events && events.length > 0) {
      events.forEach((event) => {
        this._renderEvent(event);
      });
    } else {
      this._renderEmptyList();
    }

  }

  _clearAllEvents() {
    this._eventPresenter.forEach((presenter) => presenter.destroy());
    this._eventPresenter.clear();

    if (this._emptyList) {
      remove(this._emptyList);
    }
  }

  _renderEmptyList() {
    this._emptyList = new EmptyListView(this._filterType);
    render(this._eventsBoard, this._emptyList, RenderPosition.BEFOREEND);
  }

  renderNewEvent() {
    this._handleModeChange();
    this._currentSortType = SortType.DEFAULT;
    this._filterModel.setFilter(UpdateType.MAJOR, FilterType.ALL);

    this._eventNewComponent = new EventNewPresenter(this._eventsListComponent, this._handleViewAction);

    this._eventNewComponent.init();
  }

  removeNewEvent() {
    if (this._eventNewComponent) {
      this._eventNewComponent.destroy();
    }

  }

  // _setEventNewListener() {
  //   const newEventButton = document.querySelector('.trip-main__event-add-btn');

  //   newEventButton.addEventListener('click', () => {
  //     this._renderNewEvent();
  //   });
  // }
}
