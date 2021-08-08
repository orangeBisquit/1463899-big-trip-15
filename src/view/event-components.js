import dayjs from 'dayjs';

const createDateTemplate = (dateFrom, format) => dayjs(dateFrom).format(format);

const createOffersSelection = (offers) => {

  const offerItems = offers.map((offer) => (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">
      <label class="event__offer-label" for="event-offer-luggage-1">
      <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
                        </label>
    </div>`
  ));

  return  `<div class="event__available-offers">
            ${offerItems.join('\n')}
          </div>`;
};

export { createDateTemplate, createOffersSelection };
