import {
  getRandomInteger,
  getRandomSentence,
  getRandomArrayItem
} from '../utils.js';
import dayjs from 'dayjs';

import { WAYPOINT_TYPES} from './mock-data.js';

// Тип
const generateEventType = () => getRandomArrayItem(WAYPOINT_TYPES);

// Опции
const generateOffers = (max) => {
  const offersCount = getRandomInteger(1, max);
  const offers = [];

  for (let i = 1; i < offersCount; i++) {
    const option = {
      title: getRandomSentence(15),
      price: getRandomInteger(20, 200),
    };

    offers.push(option);
  }

  return offers;
};

// Фотографии
const generatePhotos = () => {
  const minPhotoCount = 1;
  const maxPhotoCount = 10;
  const photosCount = getRandomInteger(minPhotoCount, maxPhotoCount);

  const photos = [];

  for (let i = minPhotoCount; i <= photosCount; i++) {
    const randomPhotoId = getRandomInteger(1, 2000);
    const randomPhoto = {
      src: `http://picsum.photos/248/152?r=${randomPhotoId}`,
      description: getRandomSentence(),
    };
    photos.push(randomPhoto);
  }

  return photos;
};

// Даты
const generateDateFrom = () => {
  const maxDaysGap = 5;
  const maxMinutesGap = 60;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const minutesGap = getRandomInteger(-maxMinutesGap, maxMinutesGap);

  const dateFrom = dayjs()
    .add(daysGap, 'day')
    .add(minutesGap, 'minute')
    .toDate();

  return dateFrom;
};

const generateDateTo = (dateFrom) => {
  const minDurationHours = 1;
  const maxDurationHours = 100;
  const durationHours = getRandomInteger(minDurationHours, maxDurationHours);

  const minMinutes = 1;
  const maxMinutes = 59;
  const durationMinutes = getRandomInteger(minMinutes, maxMinutes);

  const dateTo = dayjs(dateFrom)
    .add(durationHours, 'h')
    .add(durationMinutes, 'm')
    .toDate();

  return dateTo;
};

export {
  generateEventType,
  generateOffers,
  generatePhotos,
  generateDateFrom,
  generateDateTo
};
