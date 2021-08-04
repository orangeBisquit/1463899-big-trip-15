export const calculatePrice = (events) => {

  const priceTotal = events.reduce((total, event) => {
    const {basePrice, offers} = event;

    let offersTotal = 0;

    if (offers && offers.length > 0) {
      offersTotal = offers.reduce((sum, offer) => (sum += offer.price), 0);
    }

    return total += basePrice + offersTotal;
  }, 0);

  return priceTotal;
};


