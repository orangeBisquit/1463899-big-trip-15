import EventNewView from '../view/event-new.js';
import { render, remove, RenderPosition } from '../utils/render.js';
import { isEscPress } from '../utils/common.js';
import { offers, destinations } from '../mocks/real-data.js';
import { Mode, UserAction, UpdateType  } from '../utils/const.js';

export default class PointNew {
  constructor(eventsListContainer, handleEventChange) {
    this._eventsListContainer = eventsListContainer;
    this._changeData = handleEventChange;

    this._eventNewComponent = null;
    this._destroyCallback = null;

    this._mode = Mode.DEFAULT;

    this._handleCloseEventNew = this._handleCloseEventNew.bind(this);
    this._handleSaveClick = this._handleSaveClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
  }

  init() {
    this._event = null;

    this._eventNewComponent = new EventNewView(offers, destinations);

    this._eventNewComponent.setCloseNewHandler(this._handleCloseEventNew);
    this._eventNewComponent.setEventSaveHandler(this._handleSaveClick);

    render(this._eventsListContainer, this._eventNewComponent, RenderPosition.AFTERBEGIN);

    this.setEscKeyDownHandler();

    this._mode = Mode.EDITING;
  }

  _closeNewEvent () {
    this.destroy();
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

  setEscKeyDownHandler() {
    document.addEventListener('keydown', this._escKeyDownHandler);
  }

  _handleCloseEventNew() {
    this._closeNewEvent();
  }

  destroy() {
    remove(this._eventNewComponent);
    this._eventNewComponent.removeElement();
    this._enableEventNewButton();
  }

  _enableEventNewButton() {
    document.querySelector('.trip-main__event-add-btn').disabled = false;
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closeNewEvent();
    }
  }

  _handleSaveClick(update) {
    this._changeData(
      UserAction.ADD_EVENT,
      UpdateType.MINOR,
      Object.assign(
        {},
        update,
      ),
    );
    this.destroy();
  }
}
