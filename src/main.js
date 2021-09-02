import {  handlePseudo } from './utils/utils.js';
import TripEventsPresenter from './presenter/trip-events.js';
import EventsModel from './model/events.js';
import OffersModel from './model/offers.js';
import DestinationsModel from './model/destinations.js';
import FilterModel from './model/filter.js';
import FilterPresenter from './presenter/filter.js';
import RoutePresenter from './presenter/route.js';
import { MenuItem } from './utils/const.js';
import MainMenuView from './view/menu.js';
import { remove, render, RenderPosition } from './utils/render.js';
import StatisticsView from './view/statistics.js';
import Api from './api/api.js';
import { UpdateType } from './utils/const.js';

const AUTHORIZATION = 'Basic hS2thsdfSwco11k9j';
const END_POINT = 'https://15.ecmascript.pages.academy/big-trip';

const routeElement = document.querySelector('.trip-main');
const eventsElement = document.querySelector('.trip-events');
const menuElement = routeElement.querySelector('.trip-controls__navigation');
const addNewEventButton = document.querySelector('.trip-main__event-add-btn');

let statisticsComponent = null;
const api = new Api(END_POINT, AUTHORIZATION);
const mainMenu = new MainMenuView();
const eventsModel = new EventsModel();
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const filterModel = new FilterModel();
const filter = new FilterPresenter(routeElement, filterModel, eventsModel);
const tripEvents = new TripEventsPresenter(eventsElement, eventsModel, filterModel, api, offersModel, destinationsModel);
const routePresenter = new RoutePresenter(routeElement, eventsModel);

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:
      tripEvents.init();

      if (statisticsComponent !== null) {
        remove(statisticsComponent);
      }

      handlePseudo();
      break;
    case MenuItem.STATS:
      tripEvents.destroy();
      tripEvents.removeNewEvent();

      statisticsComponent = new StatisticsView(eventsModel.getEvents());
      render(eventsElement, statisticsComponent, RenderPosition.BEFOREEND);

      handlePseudo(true);
      break;
  }
};

filter.init();
tripEvents.init();
routePresenter.init();
render(menuElement, mainMenu, RenderPosition.BEFOREEND);
mainMenu.setMenuClickHandler(handleSiteMenuClick);

addNewEventButton.addEventListener('click', (evt) => {
  if (statisticsComponent) {
    remove(statisticsComponent);
  }
  tripEvents.init();
  tripEvents.renderNewEvent();

  evt.target.disabled = true;

  mainMenu.handleMenuActiveLink(evt);

  handlePseudo();
});

api.getInitialData().then((values) => {
  const [offers, destinations, points] = values;

  offersModel.setOffers(offers);
  destinationsModel.setDestinations(destinations);
  eventsModel.setEvents(UpdateType.INIT, points);
});
