import React from 'react';

const Menu = (props: { handleMenuSelection: (page: Page) => void }): JSX.Element => {
  return (
    <div className="menu">
      <div className="menu__header">
        <p>Menu</p>
      </div>
      <div className="menu__btns">
        <button
          className="menu__btn menu__btn--add"
          onClick={() => props.handleMenuSelection('ADD')}
        >
          Add action
        </button>
        <button
          className="menu__btn menu__btn--list"
          onClick={() => props.handleMenuSelection('LIST')}
        >
          Actions list
        </button>
      </div>
    </div>
  );
};

export default Menu;
