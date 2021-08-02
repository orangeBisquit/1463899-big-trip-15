import { sentencesTemplate } from './model/mock-data.js';

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

export { getRandomInteger, getRandomArrayItem, getRandomSentence };
