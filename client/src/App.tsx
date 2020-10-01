import React, { useState } from 'react';
import './css/App.min.css';
import ActionsList from './components/actions_list/ActionsList';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';

function App(): JSX.Element {
  const [displayedPage, setDisplayedPage] = useState<Page>('LIST');
  const handleMenuSelection = (page: Page): void => {
    setDisplayedPage(page);
  };

  return (
    <div className="wrapper">
      <Menu handleMenuSelection={handleMenuSelection} />
      {displayedPage === 'ADD' ? <Form /> : null}
      {displayedPage === 'LIST' ? <ActionsList /> : null}
    </div>
  );
}

export default App;
