import { $ } from "../utils/dom.js";
import { CLASS_NAME, MENU, COLOR } from "../utils/constants.js";

class MenuSection {
  constructor(props) {
    this.props = props;
    this._selectDOM();
    this._bindEvent();
  }

  setState({ clickedMenu }) {
    this.clickedMenu = clickedMenu ?? this.clickedMenu;

    this._render();
  }

  _initState() {
    this.clickedMenu = MENU.WATCH_LATER;
  }

  _selectDOM() {
    this.$target = $(`.${CLASS_NAME.MENU_SECTION}`);
    this.$watchLaterBtn = $(`.${CLASS_NAME.WATCH_LATER_BTN}`);
    this.$watchedBtn = $(`.${CLASS_NAME.WATCHED_BTN}`);
    this.$likedBtn = $(`.${CLASS_NAME.LIKED_BTN}`);
    this.$videoSearchBtn = $(`.${CLASS_NAME.VIDEO_SEARCH_BTN}`);
  }

  _bindEvent() {
    this.$target.addEventListener("click", e => {
      if (
        !e.target.classList.contains(CLASS_NAME.MENU_TOGGLE_BTN) &&
        !e.target.classList.contains(CLASS_NAME.SEARCH_BTN)
      )
        return;

      this._handleSelectMenu(e.target);
    });
  }

  _handleSelectMenu(target) {
    const menuNames = [
      CLASS_NAME.WATCH_LATER_BTN,
      CLASS_NAME.WATCHED_BTN,
      CLASS_NAME.LIKED_BTN,
      CLASS_NAME.VIDEO_SEARCH_BTN,
    ];

    const selectedMenu = menuNames.find(name => target.classList.contains(name));

    this._changeMenuBtnColor(target);
    this._getMatchedAction(selectedMenu)();
  }

  _changeMenuBtnColor(target) {
    [this.$watchLaterBtn, this.$watchedBtn].forEach($btn => $btn.classList.remove(COLOR.CLICKED));

    if (!target.classList.contains(CLASS_NAME.VIDEO_SEARCH_BTN)) {
      target.classList.add(COLOR.CLICKED);
    }
  }

  _getMatchedAction(selectedMenu) {
    const menuAction = {
      [CLASS_NAME.WATCH_LATER_BTN]: () => {
        this.props.changeMenu(MENU.WATCH_LATER);
      },
      [CLASS_NAME.WATCHED_BTN]: () => {
        this.props.changeMenu(MENU.WATCHED);
      },
      [CLASS_NAME.LIKED_BTN]: () => {
        this.props.changeMenu(MENU.LIKED);
      },
      [CLASS_NAME.VIDEO_SEARCH_BTN]: () => {
        this.props.openModal();
      },
    };

    return menuAction[selectedMenu];
  }

  _render() {
    const mappingMenu = {
      [MENU.WATCH_LATER]: this.$watchLaterBtn,
      [MENU.WATCHED]: this.$watchedBtn,
      [MENU.LIKED]: this.$likedBtn,
    };

    [this.$watchLaterBtn, this.$watchedBtn].forEach($btn => $btn.classList.remove(COLOR.CLICKED));
    [this.$watchLaterBtn, this.$likedBtn].forEach($btn => $btn.classList.remove(COLOR.CLICKED));
    mappingMenu[this.clickedMenu].classList.add(COLOR.CLICKED);
  }
}

export default MenuSection;