import React from 'react';
import Action from './Action';

const ActionsTable = (props: { actions: Action[] }): JSX.Element => {
  return (
    <div className="actions-list__content">
      <table>
        <thead>
          <tr>
            <td hidden={true}></td>
            <td>User ID</td>
            <td>Game ID</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.actions.map((action: Action) => (
            <tr key={action.id}>
              <td hidden={true}>{action.id}</td>
              <td>{action.userId}</td>
              <td>{action.gameId}</td>
              <td>{action.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActionsTable;
