import { getRandomInteger, getRandomSentence } from '../utils.js';
import dayjs from 'dayjs';
import {
  generateEventType,
  generateOffers,
  generatePhotos
} from './mock-utils.js';

const generateNewEvent = () => {
  const dateFrom = dayjs();
  const dateTo = '';

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

export { generateNewEvent };
