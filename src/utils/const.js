const SortType = {
  DEFAULT: 'day-down',
  PRICE_DOWN: 'price-down',
  DURATION_DOWN: 'duration-down',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const FLATPICKER_SETUP = {
  dateFormat: 'd/m/y H:i',
  ['time_24hr']: true,
  enableTime: true,
};

export { SortType, Mode, FLATPICKER_SETUP };
