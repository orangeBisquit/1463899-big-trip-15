export const calculatePrice = (events) => {
  let priceTotal = 0;

  events.forEach((event) => {
    const {basePrice, offers} = event;

    basePrice ? (priceTotal += parseInt(basePrice, 10)) : null;

    offers.length > 0 ? offers.forEach((offer) => {
      priceTotal += parseInt(offer.price, 10);
    }) : null;
  });

  return priceTotal;
};


