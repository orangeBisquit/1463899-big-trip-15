import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';
import { render, replace, RenderPosition, remove } from '../utils/render.js';
import { isEscPress } from '../utils/common.js';
import { offers, destinations } from '../mocks/real-data.js';
import { Mode } from '../utils/const.js';

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
    this._eventEditComponent = new EventEditView(event, offers, destinations);

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
    if (isEscPress(evt)) {
      evt.preventDefault();
      this._hideEditEvent();
      document.removeEventListener('keydown', this._escKeyDownHandler);
    }
  }

  _handleOpenEditClick() {
    this._showEditEvent();
  }

  _handleHideEditClick() {
    // TODO: Когда появится сохрание - перенести вызов в правильное место
    this._eventEditComponent.reset(this._event);
    this._hideEditEvent();
  }

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
