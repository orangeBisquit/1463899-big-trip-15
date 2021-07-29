import { createRouteTempalte } from "./view/route.js";
import { createPriceTempalte } from "./view/price.js";
import { createMenuTemplate } from "./view/menu.js";
import { createFiltersTemplate } from "./view/filter.js";
import { createSortTemplate } from "./view/sort.js";
import { createEventsListTemplate } from "./view/content.js";
import { createEventTemplate } from "./view/events.js";
import { createNewEventTemplate } from "./view/new-event.js";
import { createEditEventTemplate } from "./view/edit-event.js";

const routeElement = document.querySelector(".trip-main");
const menuElement = document.querySelector(".trip-controls__navigation");
const filterElement = document.querySelector(".trip-controls__filters");
const eventsElement = document.querySelector(".trip-events");

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

render(routeElement, createRouteTempalte(), "afterbegin");
render(menuElement, createMenuTemplate(), "beforeend");
render(filterElement, createFiltersTemplate(), "beforeend");
render(eventsElement, createSortTemplate(), "beforeend");
render(eventsElement, createEventsListTemplate(), "beforeend");

const tripInfoElement = document.querySelector('.trip-info');
render(tripInfoElement, createPriceTempalte(), "beforeend");

const contentElement = document.querySelector(".trip-events__list");
render(contentElement, createEditEventTemplate(), "afterbegin");
render(contentElement, createNewEventTemplate(), "afterbegin");
render(contentElement, createEventTemplate(), "beforeend");
render(contentElement, createEventTemplate(), "beforeend");
render(contentElement, createEventTemplate(), "beforeend");
