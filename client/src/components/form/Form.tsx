import React, { useState } from 'react';
import actions from '../../utils/allowedActions';
import submit from './submit';

const DEFAULT_MESSAGE = 'Please fill highlighted fields';

const Form = (): JSX.Element => {
  const [userId, setUserId] = useState<UserId>('');
  const [gameId, setGameId] = useState<GameId>('');
  const [action, setAction] = useState<ActionType | ''>('');
  const [message, setMessage] = useState<string>(DEFAULT_MESSAGE);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    if (userId === '') document.getElementById('userId')?.classList.add('mistake');
    if (gameId === '') document.getElementById('gameId')?.classList.add('mistake');
    if (action === '') document.getElementById('action')?.classList.add('mistake');

    if (userId === '' || gameId === '' || action === '') {
      setMessage(DEFAULT_MESSAGE);
      setShowMessage(true);
      return;
    }

    const result: boolean = await submit({ userId, gameId, action });
    if (!result) {
      setMessage('Could not submit the action');
      setShowMessage(true);
    } else {
      setMessage('Action submited.');
      setShowMessage(true);
    }
  };

  // TODO: On .mistake add message explaining what to do.
  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === '') {
      document.getElementById('userId')?.classList.add('mistake');
    } else {
      document.getElementById('userId')?.classList.remove('mistake');
    }
    setUserId(event.target.value);
  };

  const handleGameIdChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === '') {
      document.getElementById('gameId')?.classList.add('mistake');
    } else {
      document.getElementById('gameId')?.classList.remove('mistake');
    }
    setGameId(event.target.value);
  };

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.value === '') {
      document.getElementById('action')?.classList.add('mistake');
    } else {
      document.getElementById('action')?.classList.remove('mistake');
    }
    setAction(event.target.value as ActionType);
  };

  return (
    <form className="action-form" onSubmit={handleSubmit}>
      <div className="action-form__header">
        <p>New Action</p>
      </div>
      <div className="action-form__content">
        <label className="action-form__label" htmlFor="userId">
          User ID
        </label>
        <input
          className="action-form__text-input"
          type="text"
          name="userId"
          id="userId"
          value={userId}
          onChange={handleUserIdChange}
        />
        <label className="action-form__label" htmlFor="gameId">
          Game ID
        </label>
        <input
          className="action-form__text-input"
          type="text"
          name="gameId"
          id="gameId"
          value={gameId}
          onChange={handleGameIdChange}
        />
        <label className="action-form__label" htmlFor="action">
          Action
        </label>
        <select
          className="action-form__droplist"
          name="action"
          id="action"
          value={action}
          onChange={handleActionChange}
        >
          <option value="" key="-1">
            please select action
          </option>
          {actions.map((action: ActionType) => (
            <option value={action} key={action}>
              {action}
            </option>
          ))}
        </select>
        <button className="action-form__submit" type="submit">
          Submit
        </button>
        <p className="action-form__message" id="action-form__message" hidden={!showMessage}>
          {message}
        </p>
      </div>
    </form>
  );
};

export default Form;
