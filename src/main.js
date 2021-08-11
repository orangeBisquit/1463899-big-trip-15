import RouteView from './view/route.js';
import PriceView from './view/price.js';
import MainMenuView from './view/menu.js';
import FiltersView from './view/filter.js';
import SortView from './view/sort.js';
import EventsListView from './view/events-list.js';
import EventView from './view/events.js';
import NewEventView from './view/new-event.js';
import EditEventView from './view/edit-event.js';
import { generateEvent } from './mocks/mock-event.js';
import { render, replace, remove, RenderPosition } from './utils/render.js';
import { getRandomInteger } from './utils/utils.js';
import { isEscPress } from './utils/common.js';
import EmptyListView from './view/empty-list.js';

const WAYPOINT_COUNT = getRandomInteger(0, 2);

const routeElement = document.querySelector('.trip-main');
const menuElement = document.querySelector('.trip-controls__navigation');
const filterElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');
const newEventButton = document.querySelector('.trip-main__event-add-btn');

// Генерация Объектов
const events = new Array(WAYPOINT_COUNT).fill(' ').map(generateEvent);

// Функции рендера
const renderEvent = (eventsList, event) => {
  const eventComponent = new EventView(event);
  const editEventComponent = new EditEventView(event);

  const showEditEvent = () => {
    replace(editEventComponent, eventComponent);
  };

  const hideEditEvent = () => {
    replace(eventComponent, editEventComponent);
  };

  const onEscKeyDown = (evt) => {
    evt.preventDefault();
    if (isEscPress(evt)) {
      hideEditEvent();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  eventComponent.setOpenEditHandler(() => {
    showEditEvent();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editEventComponent.setCloseEditHandler(() => {
    hideEditEvent();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(eventsList, eventComponent, RenderPosition.BEFOREEND);
};
// EXTRA
const updateTripInfo = (allEvents) => {

  if (allEvents.children.length > 0) {
    render(routeElement, new RouteView(events), RenderPosition.AFTERBEGIN);

    const tripInfoElement = document.querySelector('.trip-info');

    render(tripInfoElement, new PriceView(events), RenderPosition.BEFOREEND);
  } else {
    render(eventsElement, new EmptyListView(), RenderPosition.BEFOREEND);
  }
};
// ---

const createNewEvent = (eventsList) => {
  const newEventComponent = new NewEventView();

  const closeNewEvent = () => {
    remove(newEventComponent);
  };

  const onEscKeyDown = (evt) => {
    evt.preventDefault();
    if (isEscPress(evt)) {
      closeNewEvent();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  document.addEventListener('keydown', onEscKeyDown);

  newEventComponent.setCloseNewHandler(() => {
    closeNewEvent();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(eventsList, newEventComponent, RenderPosition.AFTERBEGIN);
};

const renderUI = () => {
  render(menuElement, new MainMenuView(), RenderPosition.BEFOREEND);
  render(filterElement, new FiltersView(), RenderPosition.BEFOREEND);
  render(eventsElement, new SortView(), RenderPosition.AFTERBEGIN);
  render(eventsElement, new EventsListView(), RenderPosition.BEFOREEND);
};
// Рендер интерфейса
renderUI();

const contentElement = document.querySelector('.trip-events__list');

for (let i = 0; i < events.length; i++) {
  renderEvent(contentElement, events[i]);
}

updateTripInfo(contentElement);

newEventButton.addEventListener('click', () => {
  createNewEvent(contentElement);
});

