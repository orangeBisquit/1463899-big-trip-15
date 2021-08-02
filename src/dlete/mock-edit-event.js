import { getRandomInteger, getRandomSentence } from '../utils.js';
import {
  generateEventType,
  generateOffers,
  generatePhotos
} from './mock-utils.js';
import { generateDateFrom, generateDateTo } from './mock-utils.js';

const generateEditEvent = () => {
  const dateFrom = generateDateFrom();
  const dateTo = generateDateTo(dateFrom);

  return {
    basePrice: 0,
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: {
      description: getRandomSentence(30),
      name: '',
      pictures: generatePhotos(),
    },
    id: getRandomInteger(0, 9999),
    isFavorite: '',
    offers: generateOffers(6),
    type: generateEventType(),
  };
};

export { generateEditEvent };
