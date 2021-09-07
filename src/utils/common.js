import dayjs from 'dayjs';
import { FilterType } from './const';

const getUniqueTypes = (events) => {
  const uniqueTypes = new Set();
  events.map((event) => uniqueTypes.add(event.type));
  return uniqueTypes;
};

const getUniqueAmount = (uniqueTypes) => {
  const uniqueTypesAmount = {};
  uniqueTypes.forEach((type) => {
    uniqueTypesAmount[type] = 0;
  });
  return uniqueTypesAmount;
};

const calculateTypeCost = (events) => {
  const uniqueTypes = getUniqueTypes(events);
  const uniqueTypesCost = getUniqueAmount(uniqueTypes);

  events.forEach((event) => {
    uniqueTypesCost[event.type] += event.basePrice;
  });

  const uniqueTypesCostOrdered = new Map(Object.entries(uniqueTypesCost).sort((a, b) => b[1] - a[1]));

  return uniqueTypesCostOrdered;
};

const calculateTypeCount = (events) => {
  const uniqueTypes = getUniqueTypes(events);
  const uniqueTypesCount = getUniqueAmount(uniqueTypes);

  events.forEach((event) => {
    uniqueTypesCount[event.type]++;
  });

  const uniqueTypesCountOrdered = new Map(Object.entries(uniqueTypesCount).sort((a, b) => b[1] - a[1]));
  return uniqueTypesCountOrdered;
};

const calculateTypeTime = (events) => {
  const uniqueTypes = getUniqueTypes(events);
  const uniqueTypesTime = getUniqueAmount(uniqueTypes);

  events.forEach((event) => {
    const eventDuration = dayjs(event.dateTo).diff(dayjs(event.dateFrom), 'm');
    uniqueTypesTime[event.type] += eventDuration;
  });

  const uniqueTypesTimeOrdered = new Map(Object.entries(uniqueTypesTime).sort((a, b) => b[1] - a[1]));

  return uniqueTypesTimeOrdered;
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

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

const getEventDuration = (start, end) => dayjs(start).diff(dayjs(end));

const sortDateDown = (eventA, eventB) => eventA.dateFrom - eventB.dateFrom;

const sortDurationDown = (eventA, eventB) => getEventDuration(eventA.dateFrom, eventA.dateTo) - getEventDuration(eventB.dateFrom, eventB.dateTo);

const sortPriceDown = (eventA, eventB) => eventB.basePrice - eventA.basePrice;

const isFutureEvent = (event) => {
  const { dateFrom } = event;
  const currentDate = new Date();
  return currentDate - dateFrom < 0;
};
const isPastEvent = (event) => {
  const { dateTo } = event;
  const currentDate = new Date();
  return currentDate - dateTo > 0;
};

const filter = {
  [FilterType.ALL]: (events) => events.filter((event) => event),
  [FilterType.FUTURE]: (events) => events.filter((event) => isFutureEvent(event)),
  [FilterType.PAST]: (events) => events.filter((event) => isPastEvent(event)),
};


export { capitalizeFirstLetter, sortByDate, calculatePrice, isEscPress, sortDateDown, sortDurationDown, sortPriceDown, filter, calculateTypeCost, calculateTypeCount, calculateTypeTime};

