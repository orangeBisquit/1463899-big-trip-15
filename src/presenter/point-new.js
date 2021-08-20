import EventNewView from '../view/event-new.js';
import { render, remove, RenderPosition } from '../utils/render.js';
import { isEscPress } from '../utils/common.js';

export default class PointNew {
  constructor(eventsListContainer) {
    this._eventsListContainer = eventsListContainer;

    this._eventNewComponent = null;

    this._handleCloseEventNew = this._handleCloseEventNew.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    this._event = null;

    this._eventNewComponent = new EventNewView();

    this._eventNewComponent.setCloseNewHandler(this._handleCloseEventNew);

    render(this._eventsListContainer, this._eventNewComponent, RenderPosition.AFTERBEGIN);
  }

  _closeNewEvent () {
    remove(this._eventNewComponent);
    document.removeEventListener('keydown', this._escKeyDownHandler);
  }

  _escKeyDownHandler(evt) {
    evt.preventDefault();
    if (isEscPress(evt)) {
      this._closeNewEvent();
      document.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleCloseEventNew() {
    this._closeNewEvent();
  }
}
