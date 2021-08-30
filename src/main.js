import { generateEvent } from './mocks/mock-event.js';
import { getRandomInteger, handlePseudo } from './utils/utils.js';
import TripEventsPresenter from './presenter/trip-events.js';
import EventsModel from './model/events.js';
import FilterModel from './model/filter.js';
import FilterPresenter from './presenter/filter.js';
import RoutePresenter from './presenter/route.js';
import { MenuItem } from './utils/const.js';
import MainMenuView from './view/menu.js';
import { remove, render, RenderPosition } from './utils/render.js';
import StatisticsView from './view/statistics.js';

// TODO: Удалить когда будет не нужно
const WAYPOINT_COUNT = getRandomInteger(10, 20);

const routeElement = document.querySelector('.trip-main');
const eventsElement = document.querySelector('.trip-events');
const menuElement = routeElement.querySelector('.trip-controls__navigation');
const addNewEventButton = document.querySelector('.trip-main__event-add-btn');

// Генерация Объектов
const events = new Array(WAYPOINT_COUNT).fill(' ').map(generateEvent);

let statisticsComponent = null;
const mainMenu = new MainMenuView();
const eventsModel = new EventsModel();
eventsModel.setEvents(events);
const filterModel = new FilterModel();
const filter = new FilterPresenter(routeElement, filterModel, eventsModel);
const tripEvents = new TripEventsPresenter(eventsElement, eventsModel, filterModel);
const routePresenter = new RoutePresenter(routeElement, eventsModel);

const handleSiteMenuClick = (menuItem) => {
  switch (menuItem) {
    case MenuItem.TABLE:

      tripEvents.init();

      remove(statisticsComponent);

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

