import EventView from '../view/event';
import EventEditView from '../view/event-edit';
import { render, replace, RenderPosition, remove } from '../utils/render';
import { isEscPress } from '../utils/common';
import { Mode, UserAction, UpdateType, FormState } from '../utils/const';

export default class Event {
  constructor(eventsListContainer, handleEventChange, changeMode) {
    this._eventsListContainer = eventsListContainer;
    this._offersModel = null;
    this._destinationsModel = null;
    this._changeData = handleEventChange;
    this._changeMode = changeMode;
    this._eventComponent = null;
    this._eventEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleOpenEditClick = this._handleOpenEditClick.bind(this);
    this._handleHideEditClick = this._handleHideEditClick.bind(this);
    this._escKeyDownHandler = this._escKeyDownHandler.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleSaveClick = this._handleSaveClick.bind(this);
  }

  init(event, offersModel, destinationsModel) {
    this._event = event;
    this._offersModel = offersModel;
    this._destinationsModel = destinationsModel;

    const prevEventComponent = this._eventComponent;
    const prevEventEditComponent = this._eventEditComponent;

    this._eventComponent = new EventView(event);
    this._eventEditComponent = new EventEditView(event, this._getOffers(), this._getDestinations());

    this._eventComponent.setOpenEditHandler(this._handleOpenEditClick);
    this._eventEditComponent.setCloseEditHandler(this._handleHideEditClick);
    this._eventComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._eventEditComponent.setEventDeleteHandler(this._handleDeleteClick);
    this._eventEditComponent.setEventSaveHandler(this._handleSaveClick);

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

  _getOffers() {
    return this._offersModel.getOffers();
  }

  _getDestinations() {
    return this._destinationsModel.getDestinations();
  }

  setViewState(state) {

    const resetFormState = () => {
      this._eventEditComponent.updateData({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    switch (state) {
      case FormState.SAVING:
        this._eventEditComponent.updateData({
          isDisabled: true,
          isSaving: true,
        });
        replace(this._eventEditComponent, this._eventEditComponent);
        break;
      case FormState.DELETING:
        this._eventEditComponent.updateData({
          isDisabled: true,
          isDeleting: true,
        });
        replace(this._eventEditComponent, this._eventEditComponent);
        break;
      case FormState.ABORTING:
        this._eventEditComponent.shake(resetFormState);
        break;
    }
  }

  destroy() {
    remove(this._eventComponent);
    remove(this._eventEditComponent);
    this._eventEditComponent.removeElement();
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
    this._eventEditComponent.reset(this._event);
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
    this._eventEditComponent.reset(this._event);
    this._hideEditEvent();
  }

  _handleFavoriteClick() {
    this._changeData(
      UserAction.UPDATE_EVENT,
      UpdateType.MINOR,
      Object.assign(
        {},
        this._event,
        {
          isFavorite: !this._event.isFavorite,
        },
      ),
    );
  }

  _handleDeleteClick() {
    this._changeData(
      UserAction.DELETE_EVENT,
      UpdateType.MINOR,
      Object.assign(
        {},
        this._event,
      ),
    );
  }

  _handleSaveClick(update) {
    this._changeData(
      UserAction.UPDATE_EVENT,
      UpdateType.MINOR,
      Object.assign(
        {},
        update,
      ),
    );
  }
}
