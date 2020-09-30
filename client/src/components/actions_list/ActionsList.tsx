import React, { useEffect, useState } from 'react';
import Action from './Action';
import { getActions } from './actions';
import ActionsTable from './ActionsTable';
import Header from './Header';

const ActionsList = (): JSX.Element => {
  const [actions, setActions] = useState<Action[]>([]);
  const [showPrevious, setShowPrevious] = useState<boolean>(true);
  const [showNext, setShowNext] = useState<boolean>(true);
  const [itemLimit, setItemLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadActions = () => {
    getActions()
      .then((result) => {
        setActions(result);
      })
      .catch((error) => console.log(error));
  };

  const loadPage = () => {
    if (currentPage > 1) {
      setShowPrevious(true);
    } else {
      setShowPrevious(false);
    }

    // jeżeli actions <= itemLimit currentPage = 1 & hideButtons
    // jeżeli actions > itemLimit, currentPage < actions.length/itemLimit +1, show buttons if exist next/previous page
    if (actions.length / itemLimit + 1 > currentPage) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  };

  useEffect(() => loadActions(), []);
  useEffect(() => loadPage(), [actions, currentPage]);

  const handleChangeItemLimit = (newLimit: number) => setItemLimit(newLimit);

  const handlePageChange = (modifier: number) => setCurrentPage(currentPage + modifier);

  return (
    <div className="actions-list">
      <Header itemLimit={itemLimit} changeLimit={handleChangeItemLimit} />
      <ActionsTable actions={actions} />
      <div className="actions-list__footer">
        <button
          className="btn--ghost"
          onClick={() => handlePageChange(-1)}
          disabled={!showPrevious}
        >
          Previous page
        </button>
        <button className="btn--cta" onClick={() => handlePageChange(1)} disabled={!showNext}>
          Next page
        </button>
      </div>
    </div>
  );
};

export default ActionsList;
