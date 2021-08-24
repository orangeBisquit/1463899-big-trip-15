import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../utils/common.js';

const createDateTemplate = (dateFrom, format) => dayjs(dateFrom).format(format);


const getOffers = (evt, offers) => {
  const type = offers.find((item) => item.type === evt.target.value);
  return type && type.offers ? type.offers : null;
};

const createOffersSelection = (allOffers, type) => {
  const offers = allOffers.find((item) => item.type === type).offers;

  const offerItems = offers ? offers.map((offer) => {
    const offerClass = offer.title.slice().toLowerCase().split(' ').join('-');

    return `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage__${offerClass}" type="checkbox" name="event-offer-luggage">
      <label class="event__offer-label" for="event-offer-luggage__${offerClass}">
      <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
                        </label>
    </div>`;
  }).join('\n') : '';

  // console.log(offerItems);

  return offerItems ? `<section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                ${offerItems}
              </div>
          </section>` : '';
};

const createDestinationsList = (destinations) => (
  `<datalist id="destination-list-1">
    ${destinations.map((dest) =>
    `<option value="${dest.name}"></option>`)
    .join('\n')}
  </datalist>`
);

const getDescription = (evt, destinations) => {
  const destination = destinations.find((item) => item.name === evt.target.value);
  return destination && destination.description ? destination.description : '';
};

const createDescription = (description) => description ? description : '';

const getPhotos = (evt, destinations) => {
  const dest = destinations.find((item) => item.name === evt.target.value);
  return dest && dest.pictures ? dest.pictures : null;
};

const createPhotos = (photos) => photos ? `<div class="event__photos-container">
    <div class="event__photos-tape">
    ${photos.map((photo) => (
    `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`))
    .join('\n')}
    </div>
  </div>` : '';

const createDestination = (description, photos) => description && photos ? `<section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${description}</p>
              ${createPhotos(photos)}
          </section>` : '';

const createTypes = (offers, checkedType) => offers.map((offer) => {
  const { type } = offer;
  const offerChecked = type === checkedType ? 'checked' : '';
  return `<div class="event__type-item">
            <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${offerChecked}>
            <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeFirstLetter(type)}</label>
          </div>`;
}).join('\n');


export { createDateTemplate, getOffers, createOffersSelection, createDestinationsList, getDescription, createDescription, getPhotos, createPhotos, createDestination, createTypes };
