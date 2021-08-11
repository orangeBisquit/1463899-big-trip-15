const sortByDate = (events) => {
  const eventsByDay = events.slice().sort((a, b) => a.dateFrom - b.dateFrom);

  return eventsByDay;
};

const calculatePrice = (events) => {

  const priceTotal = events.reduce((total, event) => {
    const { basePrice, offers } = event;

    let offersTotal = 0;

    if (offers && offers.length > 0) {
      offersTotal = offers.reduce((sum, offer) => (sum += offer.price), 0);
    }

    return total += basePrice + offersTotal;
  }, 0);

  return priceTotal;
};

const isEscPress = (evt) => {
  if (evt.keyCode === 27 || evt.key === 'Escape' || evt.key === 'Escape') {
    return true;
  }
};

export { sortByDate, calculatePrice, isEscPress};

