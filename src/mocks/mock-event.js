import {
  getRandomInteger,
  getRandomSentence,
  getRandomArrayItem
} from '../utils/utils.js';
import {generateEventType, generateOffers, generatePhotos} from './mock-utils.js';
import { DESTINATIONS } from './mock-const.js';
import { generateDateFrom, generateDateTo } from './mock-utils.js';

// Путнк назначения
const generateDestination = () => getRandomArrayItem(DESTINATIONS);

// Объект точки маршрута
const generateEvent = () => {
  const dateFrom = generateDateFrom();
  const dateTo = generateDateTo(dateFrom);

  return {
    basePrice: getRandomInteger(50, 1000),
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: {
      description: getRandomSentence(),
      name: generateDestination(),
      pictures: generatePhotos(),
    },
    id: getRandomInteger(0, 9999),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    offers: generateOffers(3),
    type: generateEventType(),
  };
};

export { generateEvent };
