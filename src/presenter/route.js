import { render, remove, RenderPosition } from '../utils/render.js';
import RouteView from '../view/route.js';
import PriceView from '../view/price.js';

export default class Route {
  constructor(routeBoard, eventsModel) {
    this._routeContainer = routeBoard;
    this._eventsModel = eventsModel;

    this._routeComponent = null;
    this._priceComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);

    this._eventsModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._renderRoute();
  }

  _removeRoute() {
    if (this._routeComponent !== null) {
      remove(this._routeComponent);
      remove(this._priceComponent);
    }
  }

  _renderRoute() {
    const events = this._getEvents();

    if (events.length > 0) {
      this._routeComponent = new RouteView(events);
      this._priceComponent = new PriceView(events);

      render(this._routeContainer, this._routeComponent, RenderPosition.AFTERBEGIN);

      const tripInfoElement = document.querySelector('.trip-info');
      render(tripInfoElement, this._priceComponent, RenderPosition.BEFOREEND);
    }
  }

  _getEvents() {
    return this._eventsModel.getEvents();
  }

  _handleModelEvent() {
    this._removeRoute();
    this._renderRoute();
  }
}
