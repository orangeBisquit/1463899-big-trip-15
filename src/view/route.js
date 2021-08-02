import {createDateTemplate} from './event-components.js';

// Отрисовка начального и конечного пункта в меню
const showStartEndEvents = (sortedEvents) => {
  const startEventName = sortedEvents[0].destination.name;
  const endEventName = sortedEvents[sortedEvents.length - 1].destination.name;

  const startEventDate = sortedEvents[0].dateFrom;
  const endEventsDate = sortedEvents[sortedEvents.length - 1].dateFrom;

  const startDate = createDateTemplate(startEventDate, 'MMM DD');
  const endDate = createDateTemplate(endEventsDate, 'MMM DD');

  let routeMessage = '';

  if (sortedEvents.length > 2) {
    routeMessage = `${startEventName} &mdash; ... &mdash; ${endEventName}`;
  } else {
    routeMessage = `${startEventName} &mdash; ${endEventName}`;
  }

  const routeDates = `${startDate}&nbsp;&mdash;&nbsp;${endDate}`;

  const startEndMessage = `
  <h1 class="trip-info__title">${routeMessage}</h1>
  <p class="trip-info__dates">${routeDates}</p>
  `;

  return startEndMessage;
};

export const createEventTempalte = (sortedEvents) => {
  showStartEndEvents(sortedEvents);

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      ${showStartEndEvents(sortedEvents)}
    </div>
  </section>`;
};
