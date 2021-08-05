import dayjs from 'dayjs';
import {createDateTemplate} from './new-n-edit-event-components.js';
import { humanizeRouteMessage, humanizeDuration } from './../utils/utils.js';

const createIconTemplate = (type) => (
  `<div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event ${type} icon">
  </div>`
);

const createTitleTemplate = (type, destination) => {
  const titleMessage = humanizeRouteMessage(type, destination);

  return `<h3 class="event__title">${titleMessage}</h3>`;
};

const createScheduleTemplate = (dateFrom, dateTo) => {
  const timeFrom = dayjs(dateFrom).format('HH:mm');
  const timeTo = dayjs(dateTo).format('HH:mm');
  const duration = dayjs(dateTo).diff(dayjs(dateFrom), 'm');

  return ` <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateFrom}">${timeFrom}</time>
                    &mdash;
        <time class="event__end-time" datetime="${dateTo}">${timeTo}</time>
      </p>
      <p class="event__duration">${humanizeDuration(duration)}</p>
    </div>`;
};

const createOffersTemplate = (offers) => {

  const offerItems = offers.map((offer) => (
    `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`
  ));

  return `<ul class="event__selected-offers">
            ${offerItems.join('\n')}
          </ul>`;
};

const createFavoriteTemplate = (isFavorite) => {
  const isFavoriteClass = isFavorite
    ? 'event__favorite-btn event__favorite-btn--active'
    : 'event__favorite-btn';

  return `<button class="${isFavoriteClass}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>`;
};

export const createEventTemplate = (event) => {
  const {
    dateFrom,
    dateTo,
    type,
    destination: { name: destination },
    basePrice,
    offers,
    isFavorite,
  } = event;

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${createDateTemplate(dateFrom,'MMM D')}</time>
      ${createIconTemplate(type)}
      ${createTitleTemplate(type, destination)}
      ${createScheduleTemplate(dateFrom, dateTo)}
      <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createOffersTemplate(offers)}
      ${createFavoriteTemplate(isFavorite)}
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
