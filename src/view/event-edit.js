import {
  createDateTemplate,
  getOffers,
  createOffersSelection,
  getDescription,
  createDestinationsList,
  getPhotos,
  createDestination,
  createTypes
} from './event-components.js';
import SmartView from './smart.js';
import flatpickr from 'flatpickr';
import '../../node_modules/flatpickr/dist/flatpickr.min.css';
import { FLATPICKER_SETUP } from '../utils/const.js';

const createEditEvent = (event, availableOffers, destinations) => {
  const {
    dateFrom,
    dateTo,
    basePrice,
    destination: { description },
    destination: { name: destination },
    destination: { pictures: photos },
    type,
  } = event;

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
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
                    ${createDestinationsList(destinations)}
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${createDateTemplate(
    dateFrom,
    'DD/MM/YY HH:mm',
  )}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${createDateTemplate(
    dateTo,
    'DD/MM/YY HH:mm',
  )}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                ${createOffersSelection(availableOffers, type)}
                ${createDestination(description, photos)}
                </section>
              </form>
            </li>`;
};

export default class EventEdit extends SmartView {
  constructor(event, offers, destinations) {
    super();
    this._data = EventEdit.parseEventToData(event);
    this._offers = offers;
    this._destinations = destinations;
    this._flatpickrStart = null;
    this._flatpickrEnd = null;

    this._closeEditHandler = this._closeEditHandler.bind(this);
    this._destChangeHandler = this._destChangeHandler.bind(this);
    this._typeChangeHandler = this._typeChangeHandler.bind(this);
    this._priceChangeHandler = this._priceChangeHandler.bind(this);
    this._dateFromChangeHandler = this._dateFromChangeHandler.bind(this);
    this._dateToChangeHandler = this._dateToChangeHandler.bind(this);

    this._setInnerHandlers();
  }

  getTemplate() {
    return createEditEvent(this._data, this._offers, this._destinations);
  }

  _closeEditHandler(evt) {
    evt.preventDefault();
    this._callback.closeEdit();
  }

  setCloseEditHandler(callback) {
    this._callback.closeEdit = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._closeEditHandler);
    // TODO: Разделить на разные когда будет сохрание
    this.getElement().querySelector('.event__save-btn').addEventListener('click', this._closeEditHandler);
  }

  _destChangeHandler(evt) {
    const destinations = this._destinations;
    this.updateData({
      destination: {
        name: evt.target.value,
        description: getDescription(evt, destinations),
        pictures: getPhotos(evt, destinations),
      },
    });
  }

  _typeChangeHandler(evt) {
    const allOffers = this._offers;

    this.updateData({
      type: evt.target.value,
      offers: getOffers(evt, allOffers),
    });
  }

  // TODO: Подумать как реазиловать
  _priceChangeHandler(evt) {
    this.updateData({
      basePrice: evt.target.value,
    }, true);
  }

  _offerChangeHandler(evt) {
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

  destroyPickers () {
    this._flatpickrStart.destroy();
    this._flatpickrStart = null;

    this._flatpickrEnd.destroy();
    this._flatpickrEnd = null;
  }

  restoreHandlers() {
    this._setInnerHandlers();
    this.setCloseEditHandler(this._callback.closeEdit);
  }

  reset(event) {
    this.updateData(
      EventEdit.parseEventToData(event),
    );
  }

  static parseEventToData(event) {
    return Object.assign(
      {},
      event,
    );
  }

  static parseDataToEvent(data) {
    data = Object.assign({}, data);

    delete data.isDueDate;
    delete data.isRepeating;

    return data;
  }
}
