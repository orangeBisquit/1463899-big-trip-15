import MainMenuView from '../view/menu.js';
import RouteView from '../view/route.js';
import PriceView from '../view/price.js';
import FilterView from '../view/filter.js';
import SortView from '../view/sort.js';
import EventsListView from '../view/events-list.js';
import EmptyListView from '../view/empty-list.js';
import PointPresenter from './point.js';
import PointNewPresenter from './point-new.js';
import { render, RenderPosition } from '../utils/render.js';
import { updateItem } from '../utils/common.js';

export default class Trip {
  constructor(routeBoard, eventsBoard) {
    // TODO: Переедет в Route
    this._routeBoard = routeBoard;
    this._eventsBoard = eventsBoard;
    this._eventPresenter = new Map();

    this._mainMenuComponent = new MainMenuView();
    this._filterComponent = new FilterView();
    this._sortComponent = new SortView();
    this._eventsListComponent = new EventsListView();
    this._emptyList = new EmptyListView();

    this._handleEventChange = this._handleEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(events) {
    this._events = events.slice();

    render(this._eventsBoard, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderPage();
    this._renderAllEvents();
    // TODO: Перенесу в презентер Route когда появятся данные
    this._renderTripInfo();
    // FIXME: Перепроверить реализацию
    this._bindEventNewListener();
  }

  _handleModeChange() {
    this._eventPresenter.forEach((presenter) => presenter.resetView());
  }

  _handleEventChange(updatedEvent) {
    this._events = updateItem(this._events, updatedEvent);
    this._eventPresenter.get(updatedEvent.id).init(updatedEvent);
  }

  _renderMenu() {
    const menuElement = this._routeBoard.querySelector('.trip-controls__navigation');
    render(menuElement, this._mainMenuComponent, RenderPosition.BEFOREEND);
  }

  _renderFilter() {
    const filterElement = this._routeBoard.querySelector('.trip-controls__filters');
    render(filterElement, this._filterComponent, RenderPosition.BEFOREEND);
  }

  _renderSort() {
    render(this._eventsBoard, this._sortComponent, RenderPosition.AFTERBEGIN);
  }

  // TODO: Подумать что сюда поместить
  _renderPage() {
    this._renderMenu();
    this._renderFilter();
    this._renderSort();
  }

  // TODO: Переедет в Route
  _renderEmptyTripInfo() {
    render(this._eventsBoard, this._emptyList, RenderPosition.BEFOREEND);
  }

  // TODO: Переедет в Route
  _renderFilledTripInfo() {
    this._routeComponent = new RouteView(this._events);
    this._priceComponent = new PriceView(this._events);

    render(this._routeBoard, this._routeComponent, RenderPosition.AFTERBEGIN);

    const tripInfoElement = document.querySelector('.trip-info');
    render(tripInfoElement, this._priceComponent, RenderPosition.BEFOREEND);
  }

  // TODO: Переедет в Route
  _renderTripInfo() {
    if (this._events && this._events.length > 0) {
      this._renderFilledTripInfo();
    } else {
      this._renderEmptyTripInfo();
    }
  }

  _renderEvent(event) {
    const eventPresenter = new PointPresenter(this._eventsListComponent, this._handleEventChange, this._handleModeChange);
    eventPresenter.init(event);
    this._eventPresenter.set(event.id, eventPresenter);
  }

  _renderAllEvents() {
    for (let i = 0; i < this._events.length; i++) {
      this._renderEvent(this._events[i]);
    }
  }

  _clearAllEvents() {
    this._eventPresenter.forEach((presenter) => presenter.destroy());
    this._eventPresenter.clear();
  }

  _renderNewEvent() {
    const eventNewPresenter = new PointNewPresenter(this._eventsListComponent);
    eventNewPresenter.init();
  }

  // FIXME: Перепроверить реализацию, добавить esc
  _bindEventNewListener() {
    const newEventButton = this._routeBoard.querySelector('.trip-main__event-add-btn');

    newEventButton.addEventListener('click', () => {
      this._renderNewEvent();
    });
  }
}
