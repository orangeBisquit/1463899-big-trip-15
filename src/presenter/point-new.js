import EventNewView from '../view/event-new.js';
import { render, remove, RenderPosition } from '../utils/render.js';
import { isEscPress } from '../utils/common.js';
import { offers, destinations } from '../mocks/real-data.js';
import { Mode } from '../utils/const.js';

export default class PointNew {
  constructor(eventsListContainer, changeMode) {
    this._eventsListContainer = eventsListContainer;
    this._changeMode = changeMode;

    this._eventNewComponent = null;

    this._mode = Mode.DEFAULT;

    this._handleCloseEventNew = this._handleCloseEventNew.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    this._event = null;

    this._eventNewComponent = new EventNewView(offers, destinations);

    this._eventNewComponent.setCloseNewHandler(this._handleCloseEventNew);

    document.addEventListener('keydown', this._escKeyDownHandler);

    render(this._eventsListContainer, this._eventNewComponent, RenderPosition.AFTERBEGIN);

    this._mode = Mode.EDITING;
  }

  _closeNewEvent () {
    remove(this._eventNewComponent);
    document.removeEventListener('keydown', this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escKeyDownHandler(evt) {

    if (isEscPress(evt)) {
      evt.preventDefault();
      this._closeNewEvent();
      document.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleCloseEventNew() {
    this._closeNewEvent();
  }

  destroy() {
    remove(this._eventNewComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closeNewEvent();
    }
  }
}
