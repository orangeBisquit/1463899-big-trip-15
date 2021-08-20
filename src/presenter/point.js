import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';
import { render, replace, RenderPosition, remove } from '../utils/render.js';
import { isEscPress } from '../utils/common.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class Point {
  constructor(eventsListContainer, handleEventChange, changeMode) {
    this._eventsListContainer = eventsListContainer;
    this._changeData = handleEventChange;
    this._changeMode = changeMode;

    this._eventComponent = null;
    this._eventEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleOpenEditClick = this._handleOpenEditClick.bind(this);
    this._handleHideEditClick = this._handleHideEditClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(event) {
    this._event = event;
    const prevEventComponent = this._eventComponent;
    const prevEventEditComponent = this._eventEditComponent;

    this._eventComponent = new EventView(event);
    this._eventEditComponent = new EventEditView(event);

    this._eventComponent.setOpenEditHandler(this._handleOpenEditClick);
    this._eventEditComponent.setCloseEditHandler(this._handleHideEditClick);
    this._eventComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevEventComponent === null || prevEventEditComponent === null) {
      render(this._eventsListContainer, this._eventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._eventComponent, prevEventComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._eventEditComponent, prevEventEditComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditComponent);
  }

  destroy() {
    remove(this._eventComponent);
    remove(this._eventEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._hideEditEvent();
    }
  }

  _showEditEvent() {
    replace(this._eventEditComponent, this._eventComponent);
    document.addEventListener('keydown', this._escKeyDownHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _hideEditEvent() {
    replace(this._eventComponent, this._eventEditComponent);
    document.removeEventListener('keydown', this._escKeyDownHandler);
    this._mode = Mode.DEFAULT;
  }

  _escKeyDownHandler(evt) {
    evt.preventDefault();
    if (isEscPress(evt)) {
      this._hideEditEvent();
      document.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleOpenEditClick() {
    this._showEditEvent();
  }

  _handleHideEditClick() {
    this._hideEditEvent();
  }

  // TODO: Разобраться как работает
  _handleFavoriteClick() {
    this._changeData(
      Object.assign(
        {},
        this._event,
        {
          isFavorite: !this._event.isFavorite,
        },
      ),
    );
  }
}
