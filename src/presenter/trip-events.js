import SortView from '../view/sort';
import EventsListView from '../view/events-list';
import EmptyListView from '../view/empty-list';
import EventPresenter from './event';
import EventNewPresenter from './event-new';
import LoadingView from '../view/loading';
import { remove, render, RenderPosition } from '../utils/render';
import { sortDateDown, sortDurationDown, sortPriceDown, filter } from '../utils/common';
import { SortType, UserAction, UpdateType, FilterType, FormState } from '../utils/const';

export default class TripEvents {
  constructor(eventsBoard, eventsModel, filterModel, api, offersModel, destinationsModel) {
    this._eventsBoard = eventsBoard;
    this._eventsModel = eventsModel;
    this._offersModel = offersModel;
    this._destinationsModel = destinationsModel;
    this._filterModel = filterModel;
    this._api = api;

    this._eventPresenter = new Map();
    this._eventNewPresenter = null;
    this._currentSortType = SortType.DEFAULT;
    this._filterType = FilterType.ALL;
    this._isLoading = true;

    this._sortComponent = null;
    this._eventNewComponent = null;
    this._emptyList = null;
    this._eventsListComponent = new EventsListView();
    this._loadingComponent = new LoadingView();

    this._handleEventChange = this._handleEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);


  }

  init() {
    render(this._eventsBoard, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderSort();
    this._renderBoard();

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
        this._eventPresenter.get(update.id).setViewState(FormState.SAVING);
        this._api.updateEvent(update)
          .then((response) => {
            this._eventsModel.updateEvent(updateType, response);
          }).catch(() => {
            this._eventPresenter.get(update.id).setViewState(FormState.ABORTING);
          });
        break;

      case UserAction.ADD_EVENT:
        this._eventNewComponent.setSaving();
        this._api.addEvent(update)
          .then((response) => {
            this._eventsModel.addEvent(updateType, response);
            this._eventNewComponent.destroy();
          })
          .catch(() => {
            this._eventNewComponent.setAborting();
          });
        break;

      case UserAction.DELETE_EVENT:
        this._eventPresenter.get(update.id).setViewState(FormState.DELETING);
        this._api.deleteEvent(update)
          .then(() => {
            this._eventsModel.deleteEvent(updateType, update);
          })
          .catch(() => {
            this._eventPresenter.get(update.id).setViewState(FormState.ABORTING);
          });
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._eventPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this._renderBoard();
        break;
      case UpdateType.MAJOR:
        this._renderBoard();
        this._renderSort();
        break;
      case UpdateType.INIT:
        this._isLoading = false;
        remove(this._loadingComponent);
        this._renderBoard();
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

  _renderLoading() {
    render(this._eventsBoard, this._loadingComponent, RenderPosition.BEFOREEND);
  }

  _renderEvent(event) {
    const eventPresenter = new EventPresenter(this._eventsListComponent, this._handleViewAction, this._handleModeChange);
    eventPresenter.init(event, this._offersModel, this._destinationsModel);
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

  _renderBoard() {
    if (this._isLoading) {
      this._renderLoading();
      return;
    }
    this._clearAllEvents();
    this._renderAllEvents();
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

    this._eventNewComponent.init(this._offersModel, this._destinationsModel);
  }

  removeNewEvent() {
    if (this._eventNewComponent) {
      this._eventNewComponent.destroy();
    }

  }
}
