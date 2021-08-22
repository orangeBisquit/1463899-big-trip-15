import dayjs from 'dayjs';

const createDateTemplate = (dateFrom, format) => dayjs(dateFrom).format(format);


const getOffers = (evt, offers) => {
  const type = offers.find((item) => item.type === evt.target.value);
  return type && type.offers ? type.offers : null;
};

const createOffersSelection = (offers) => {
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

  return offerItems ? `<section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                ${offerItems}
              </div>
          </section>` : '';
};

const createDestinationsList = (dests) => (
  `<datalist id="destination-list-1">
    ${dests.map((dest) =>
    `<option value="${dest.name}"></option>`)
    .join('\n')}
  </datalist>`
);

const getDescription = (evt, destinations) => {
  const destination = destinations.find((item) => item.name === evt.target.value);
  return destination && destination.description ? destination.description : '';
};

const createDescription = (description) => description ? description : '';

export { createDateTemplate, getOffers, createOffersSelection, createDestinationsList, getDescription, createDescription };
