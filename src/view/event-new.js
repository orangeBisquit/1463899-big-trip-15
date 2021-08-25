import SmartView from './smart.js';

import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import flatpickr from 'flatpickr';
import { FLATPICKER_SETUP } from '../utils/const.js';
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

const getDescription = (evt, destinations) => {
  const destination = destinations.find((item) => item.name === evt.target.value);
  return destination && destination.description ? destination.description : '';
};

const createDestinationsList = (destinations) => (
  `<datalist id="destination-list-1">
    ${destinations.map((dest) =>
    `<option value="${dest.name}"></option>`)
    .join('\n')}
  </datalist>`
);

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

const generateNewEvent = () => {
  const dateFrom = dayjs();
  const dateTo = dayjs();

  return {
    basePrice: 0,
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: {
      description: '',
      name: '',
      pictures: '',
    },
    id: nanoid(),
    isFavorite: '',
    offers: [{
      'title': 'Upgrade to a business class',
      'price': 190,
    }, {
      'title': 'Choose the radio station',
      'price': 30,
    }, {
      'title': 'Choose temperature',
      'price': 170,
    }, {
      'title': 'Drive quickly, I\'m in a hurry',
      'price': 100,
    }, {
      'title': 'Drive slowly',
      'price': 110,
    }],
    type: 'taxi',
  };
};

const createNewEvent = (event, availableOffers, destinations) => {
  const {
    dateFrom,
    dateTo,
    basePrice,
    destination,
    type,
  } = event;

  const { description, name: destinationName, pictures: photos } = destination;

  return `<li class="trip-events__item">
            <form class="event event--edit" action="#" method="post">
              <header class="event__header">
                <div class="event__type-wrapper">
                  <label class="event__type  event__type-btn" for="event-type-toggle-1">
                  <span class="visually-hidden">Choose event type</span>
                  <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
                    </label>
                  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                  <div class="event__type-list">
                    <fieldset class="event__type-group">
                      <legend class="visually-hidden">Event type</legend>
                      ${createTypes(availableOffers, type)}
                    </fieldset>
                  </div>
                </div>

                <div class="event__field-group  event__field-group--destination">
                  <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
                  ${createDestinationsList(destinations)}
                </div>

                <div class="event__field-group  event__field-group--time">
                  <label class="visually-hidden" for="event-start-time-1">From</label>
                  <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${createDateTemplate(dateFrom, 'DD/MM/YY HH:MM')}">
                    &mdash;
                  <label class="visually-hidden" for="event-end-time-1">To</label>
                  <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${createDateTemplate(dateTo, 'DD/MM/YY HH:MM')}">
                  </div>

                <div class="event__field-group  event__field-group--price">
                  <label class="event__label" for="event-price-1">
                    <span class="visually-hidden">Price</span>
                      &euro;
                  </label>
                  <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${basePrice}">
                </div>

                <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                <button class="event__reset-btn" type="reset">Cancel</button>
              </header>
            <section class="event__details">
            ${createOffersSelection(availableOffers, type)}
            ${createDestination(description, photos)}
          </section>
        </form>
      </li>`;
};

export default class EventNew extends SmartView {
  constructor(offers, destinations, event = generateNewEvent()) {
    super();
    this._data = EventNew.parseEventToData(event);
    this._offers = offers;
    this._destinations = destinations;
    this._flatpickrStart = null;
    this._flatpickrEnd = null;

    this._closeNewHandler = this._closeNewHandler.bind(this);
    this._destChangeHandler = this._destChangeHandler.bind(this);
    this._typeChangeHandler = this._typeChangeHandler.bind(this);
    this._priceChangeHandler = this._priceChangeHandler.bind(this);
    this._dateFromChangeHandler = this._dateFromChangeHandler.bind(this);
    this._dateToChangeHandler = this._dateToChangeHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createNewEvent(this._data, this._offers, this._destinations);
  }

  _closeNewHandler(evt) {
    evt.preventDefault();
    this._destroyPickers();
    this._callback.closeNew();
  }

  setCloseNewHandler(callback) {
    this._callback.closeNew = callback;
    this.getElement().querySelector('.event__save-btn').addEventListener('click', this._closeNewHandler);
    // Extra
    this.getElement().querySelector('.event__reset-btn').addEventListener('click', this._closeNewHandler);
    // ---
  }

  _destChangeHandler(evt) {
    this.updateData({
      destination: {
        name: evt.target.value,
        description: getDescription(evt, this._destinations),
        pictures: getPhotos(evt, this._destinations),
      },
    });
  }

  _typeChangeHandler(evt) {
    this.updateData({
      type: evt.target.value,
      // FIXME: Исправить когда появятся данные
      offers: getOffers(evt, this._offers),
    });
  }

  _priceChangeHandler(evt) {
    this.updateData({
      basePrice: evt.target.value,
    }, true);
  }

  _dateFromChangeHandler([userDate]) {
    this.updateData({
      dateFrom: userDate,
    });
  }

  _dateToChangeHandler([userDate]) {
    this.updateData({
      dateTo: userDate,
    });
  }

  // TODO: Добавить offerChangeHandler когда будут данные

  _setInnerHandlers() {
    this.getElement().querySelector('.event__input--destination').addEventListener('change', this._destChangeHandler);
    this.getElement().querySelector('.event__type-group').addEventListener('change', this._typeChangeHandler);
    this.getElement().querySelector('.event__input--price').addEventListener('change', this._priceChangeHandler);
    this._setFlatpickrStart();
    this._setFlatpickrEnd();
  }

  _setFlatpickrStart() {
    if (this._flatpickrStart) {
      this._flatpickrStart.destroy();
      this._flatpickrStart = null;
    }

    this._flatpickrStart = flatpickr(
      this.getElement().querySelector('#event-start-time-1'),
      Object.assign(
        {},
        FLATPICKER_SETUP,
        {
          onChange: this._dateFromChangeHandler,
        },
      ),
    );
  }

  _setFlatpickrEnd() {
    if (this._flatpickrEnd) {
      this._flatpickrEnd.destroy();
      this._flatpickrEnd = null;
    }
    const eventStartDate = new Date(...this._flatpickrStart.selectedDates);

    this._flatpickrEnd = flatpickr(
      this.getElement().querySelector('#event-end-time-1'),
      Object.assign(
        {},
        FLATPICKER_SETUP,
        {
          onChange: this._dateToChangeHandler,
          minDate: eventStartDate,
        },
      ),
    );
  }

  _destroyPickers() {
    this._flatpickrStart.destroy();
    this._flatpickrStart = null;

    this._flatpickrEnd.destroy();
    this._flatpickrEnd = null;
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseNewHandler(this._callback.closeNew);
  }

  static parseEventToData(event) {
    return Object.assign(
      {},
      event,
    );
  }

  static parseDataToEvent(data) {
    data = Object.assign({}, data);

    return data;
  }
}
