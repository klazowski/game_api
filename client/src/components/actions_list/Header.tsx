import React from 'react';

const Header = (props: {
  itemLimit: number;
  changeLimit: (newLimit: number) => void;
}): JSX.Element => {
  const handleItemLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    props.changeLimit(Number.parseInt(event.target.value));

  return (
    <div className="actions-list__header">
      <p>Actions</p>
      <div className="actions-list__item-limit">
        <label htmlFor="item-limit">Actions on page:</label>
        <select
          name="item-limit"
          id="item-limit"
          className="actions-list__limit-selector"
          value={props.itemLimit}
          onChange={handleItemLimitChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
