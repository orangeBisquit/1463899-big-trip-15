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
import { renderElement, RenderPosition } from './utils/common.js';
import { getRandomInteger, isEscPress } from './utils/utils.js';
import EmptyListView from './view/empty-list.js';
// Для второго задания...
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
    eventsList.replaceChild(editEventComponent.getElement(), eventComponent.getElement());
  };

  const hideEditEvent = () => {
    eventsList.replaceChild(eventComponent.getElement(), editEventComponent.getElement());
  };

  eventComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    showEditEvent();
  });

  editEventComponent.getElement().querySelector('.event__rollup-btn').addEventListener('click', () => {
    hideEditEvent();
  });

  editEventComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', () => {
    hideEditEvent();
    eventsList.removeChild(eventComponent.getElement());
    eventComponent.removeElement();
    editEventComponent.removeElement();
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscPress(evt)) {
      hideEditEvent();
    }
  });

  editEventComponent.getElement().querySelector('.event__save-btn').addEventListener('click', () => {
    hideEditEvent();
  });

  renderElement(eventsList, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

const updateTripInfo = (allEvents) => {

  if (allEvents.children.length > 0) {
    renderElement(routeElement, new RouteView(events).getElement(), RenderPosition.AFTERBEGIN);

    const tripInfoElement = document.querySelector('.trip-info');

    renderElement(tripInfoElement, new PriceView(events).getElement(), RenderPosition.BEFOREEND);
  } else {
    renderElement(eventsElement, new EmptyListView().getElement(), RenderPosition.BEFOREEND);
  }
};

const createNewEvent = (eventsList) => {
  const newEventComponent = new NewEventView();

  const closeNewEvent = () => {
    eventsList.removeChild(newEventComponent.getElement());
  };

  newEventComponent.getElement().querySelector('.event__save-btn').addEventListener('click', () => {
    closeNewEvent();
  });

  newEventComponent.getElement().querySelector('.event__reset-btn').addEventListener('click', () => {
    closeNewEvent();
  });

  renderElement(eventsList, newEventComponent.getElement(), RenderPosition.AFTERBEGIN);
};

const renderUI = () => {
  renderElement(menuElement, new MainMenuView().getElement(), RenderPosition.BEFOREEND);
  renderElement(filterElement, new FiltersView().getElement(), RenderPosition.BEFOREEND);
  renderElement(eventsElement, new SortView().getElement(), RenderPosition.AFTERBEGIN);
  renderElement(eventsElement, new EventsListView().getElement(), RenderPosition.BEFOREEND);
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

