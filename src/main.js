import { createEventTempalte } from './view/route.js';
import { createPriceTempalte } from './view/price.js';
import { createMenuTemplate } from './view/menu.js';
import { createFiltersTemplate } from './view/filter.js';
import { createSortTemplate } from './view/sort.js';
import { createEventsListTemplate } from './view/content.js';
import { createEventTemplate } from './view/events.js';
import { createNewEventTemplate } from './view/new-event.js';
import { createEditEventTemplate } from './view/edit-event.js';
import { generateEvent } from './model/mock-event.js';
import { generateNewEvent } from './model/mock-new-event.js';
import { sortByDate } from './model/sort-by-day.js';
import { calculatePrice } from './model/calculate-price.js';

const WAYPOINT_COUNT = 20;

const routeElement = document.querySelector('.trip-main');
const menuElement = document.querySelector('.trip-controls__navigation');
const filterElement = document.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// Генерация Объектов
const events = new Array(WAYPOINT_COUNT).fill(' ').map(generateEvent);

// Сортировка объектов по дате
const sortedEvents = sortByDate(events);

// Получение общей суммы поездки
const priceTotal = calculatePrice(events);

// Отрисовка страницы
render(
  routeElement,
  createEventTempalte(sortedEvents),
  'afterbegin',
);
render(menuElement, createMenuTemplate(), 'beforeend');
render(filterElement, createFiltersTemplate(), 'beforeend');
render(eventsElement, createSortTemplate(), 'beforeend');
render(eventsElement, createEventsListTemplate(), 'beforeend');

const tripInfoElement = document.querySelector('.trip-info');
render(tripInfoElement, createPriceTempalte(priceTotal), 'beforeend');

const contentElement = document.querySelector('.trip-events__list');
render(contentElement, createEditEventTemplate(events[0]), 'afterbegin');
render(contentElement, createNewEventTemplate(generateNewEvent()), 'afterbegin');

for (let i = 0; i < events.length; i++) {
  render(contentElement, createEventTemplate(events[i]), 'beforeend');
}

