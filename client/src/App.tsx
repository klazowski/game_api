import React from 'react';
import './css/App.min.css';
import ActionsList from './components/actions_list/ActionsList';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <ActionsList />
    </div>
  );
}

export default App;
