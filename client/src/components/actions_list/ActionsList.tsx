import React, { useEffect, useState } from 'react';
import Action from './Action';
import { getActions } from './actions';
import ActionsTable from './ActionsTable';
import Header from './Header';

const ActionsList = (): JSX.Element => {
  const [actions, setActions] = useState<Action[]>([]);
  const [currentActions, setCurrentActions] = useState<Action[]>([]);
  const [showPrevious, setShowPrevious] = useState<boolean>(true);
  const [showNext, setShowNext] = useState<boolean>(true);
  const [itemLimit, setItemLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadActions = () => {
    getActions()
      .then((result) => {
        setActions(result);
        setCurrentActions(result.slice(1, 6));
      })
      .catch((error) => console.log(error));
  };

  const loadPage = () => {
    setCurrentActions(actions.slice((currentPage - 1) * itemLimit, currentPage * itemLimit));

    if (currentPage > 1) {
      setShowPrevious(true);
    } else {
      setShowPrevious(false);
    }

    if (actions.length / itemLimit > currentPage) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  };

  useEffect(() => loadActions(), []);
  useEffect(() => loadPage(), [actions, currentPage, itemLimit]);

  const handleChangeItemLimit = (newLimit: number) => setItemLimit(newLimit);

  const handlePageChange = (modifier: number) => setCurrentPage(currentPage + modifier);

  return (
    <div className="actions-list">
      <Header
        itemLimit={itemLimit}
        actionsCount={actions.length}
        changeLimit={handleChangeItemLimit}
      />
      <ActionsTable actions={currentActions} />
      <div className="actions-list__footer">
        <button
          className={`btn--ghost ${showPrevious ? '' : 'btn--disabled'}`}
          onClick={() => handlePageChange(-1)}
          disabled={!showPrevious}
        >
          Previous page
        </button>
        <button
          className={`btn--cta ${showPrevious ? '' : 'btn--disabled'}`}
          onClick={() => handlePageChange(1)}
          disabled={!showNext}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default ActionsList;
