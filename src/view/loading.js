import AbstractView from './abstract';

const createLoadingMessage = () => (
  '<p class="trip-events__msg">Loading...</p>'
);

export default class Loading extends AbstractView {
  getTemplate() {
    return createLoadingMessage();
  }
}
