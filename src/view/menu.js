import AbstractView from './abstract';
import { MenuItem } from '../utils/const';

const createMenu = () => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#" aria-label="${MenuItem.TABLE}">Table</a>
    <a class="trip-tabs__btn" href="#" aria-label="${MenuItem.STATS}">Stats</a>
    </nav>`
);

export default class Menu extends AbstractView{
  constructor() {
    super();

    this._menuClickHandler = this._menuClickHandler.bind(this);
    this.handleMenuActiveLink = this.handleMenuActiveLink.bind(this);
  }

  getTemplate() {
    return createMenu();
  }

  _menuClickHandler(evt) {
    evt.preventDefault();
    this._callback.menuClick(evt.target.ariaLabel);
    this.handleMenuActiveLink(evt);
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener('click', this._menuClickHandler);
  }

  handleMenuActiveLink(evt) {
    const menu = this.getElement();
    Array.prototype.forEach.call(menu.children, (child) => {
      child.classList.remove('trip-tabs__btn--active');
    });

    if (evt.target.tagName === 'A') {
      evt.target.classList.add('trip-tabs__btn--active');
    } else {
      menu.children[0].classList.add('trip-tabs__btn--active');
    }
  }
}
