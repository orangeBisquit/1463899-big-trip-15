import { sentencesTemplate } from '../mocks/mock-const.js';
import dayjs from 'dayjs';

const createDateTemplate = (dateFrom, format) => dayjs(dateFrom).format(format);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomInteger(0, arr.length - 1);
  return arr[randomIndex];
};

const getRandomSentence = (max) => {
  const SENTENCES = sentencesTemplate
    .split('.')
    .map((sentence) => sentence.trim());

  const randomIndex = getRandomInteger(0, SENTENCES.length - 2);

  let sencenceMaxLength = SENTENCES[randomIndex].length;

  max ? sencenceMaxLength = max : null;

  return SENTENCES[randomIndex].slice(0, sencenceMaxLength);
};

const humanizeRouteMessage = (type, destination) => {
  let titleMessage = `${type} in ${destination}`;

  switch (type) {
    case 'Taxi':
    case 'Bus':
    case 'Train':
    case 'Drive':
    case 'Flight':
      titleMessage = `${type} to ${destination}`;
      break;
    case 'Check-in':
      titleMessage = `${type} ${destination}`;
      break;
    default:
      titleMessage = `${type} in ${destination}`;
  }

  return titleMessage;
};

const humanizeDuration = (duration) => {
  let delta = duration;

  const days = Math.floor(delta / 1440);
  delta -= days * 1440;
  const humanizedDays = days > 0 ? `${days}D ` : '';

  const hours = Math.floor(delta / 60) % 24;
  delta -= hours * 60;
  const humanizedHours = hours > 0 ? `${hours}H ` : '';

  const humanizedMinutes = `${delta}M`;

  const humanizedDuration = `${humanizedDays}${humanizedHours}${humanizedMinutes}`;
  return humanizedDuration;
};

const handlePseudo = (remove) => {
  const pseudo = document.querySelector('.page-body__page-main').querySelector('.page-body__container');
  if ( remove ) {
    pseudo.classList.add('page-body__container--hidden-pseudo');
  } else {
    pseudo.classList.remove('page-body__container--hidden-pseudo');
  }
};

export { createDateTemplate, getRandomInteger, getRandomArrayItem, getRandomSentence, humanizeRouteMessage, humanizeDuration, handlePseudo };
