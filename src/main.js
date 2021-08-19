import { generateEvent } from './mocks/mock-event.js';
import { getRandomInteger } from './utils/utils.js';
import TripPresenter from './presenter/trip.js';

const WAYPOINT_COUNT = getRandomInteger(5, 5);

const routeElement = document.querySelector('.trip-main');
const eventsElement = document.querySelector('.trip-events');

// Генерация Объектов
const events = new Array(WAYPOINT_COUNT).fill(' ').map(generateEvent);

// Рендер
const Trip = new TripPresenter(routeElement, eventsElement);
Trip.init(events);
